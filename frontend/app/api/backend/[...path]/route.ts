import { NextRequest, NextResponse } from "next/server";

async function proxyRequest(request: NextRequest) {
  const configuredBaseUrl = process.env.API_BASE_URL?.trim();

  if (!configuredBaseUrl) {
    return NextResponse.json(
      { error: "API_BASE_URL is not configured" },
      { status: 500 }
    );
  }

  let baseUrl: URL;
  try {
    baseUrl = new URL(configuredBaseUrl);
  } catch {
    return NextResponse.json(
      { error: "API_BASE_URL is invalid" },
      { status: 500 }
    );
  }

  if (
    !["http:", "https:"].includes(baseUrl.protocol) ||
    baseUrl.username ||
    baseUrl.password
  ) {
    return NextResponse.json(
      { error: "API_BASE_URL is invalid" },
      { status: 500 }
    );
  }

  const upstreamPath = request.nextUrl.pathname.replace(
    /^\/api\/backend/,
    ""
  );
  const normalizedUpstreamPath = upstreamPath.startsWith("/")
    ? upstreamPath
    : `/${upstreamPath}`;

  baseUrl.pathname = `${baseUrl.pathname.replace(/\/+$/, "")}${normalizedUpstreamPath}`;
  baseUrl.search = request.nextUrl.search;
  baseUrl.hash = "";

  const headers = new Headers();
  const forwardedHeaderNames = [
    "accept",
    "content-type",
    "authorization",
    "user-agent",
    "x-requested-with",
  ];

  for (const name of forwardedHeaderNames) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  try {
    const response = await fetch(baseUrl.toString(), {
      method: request.method,
      headers,
      body:
        request.method === "GET" || request.method === "HEAD"
          ? undefined
          : await request.arrayBuffer(),
      redirect: "manual",
      cache: "no-store",
    });

    const responseHeaders = new Headers();
    for (const [name, value] of response.headers.entries()) {
      if (
        ["content-length", "transfer-encoding", "connection"].includes(
          name.toLowerCase()
        )
      ) {
        continue;
      }
      responseHeaders.set(name, value);
    }

    const responseBody = [204, 205, 304].includes(response.status)
      ? null
      : await response.arrayBuffer();

    return new NextResponse(responseBody, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Backend API request failed", {
      method: request.method,
      path: normalizedUpstreamPath,
      error: error instanceof Error ? error.name : "UnknownError",
    });

    return NextResponse.json(
      { error: "API_BASE_URL is not reachable" },
      { status: 502 }
    );
  }
}

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PATCH = proxyRequest;
export const PUT = proxyRequest;
export const DELETE = proxyRequest;
export const OPTIONS = proxyRequest;
