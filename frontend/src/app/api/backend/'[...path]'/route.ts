
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function proxyRequest(request: NextRequest) {
  const baseUrl = process.env.API_BASE_URL?.replace(/\/+$/, "");

  if (!baseUrl) {
    return NextResponse.json(
      { status: 500 }
    );
  }

  const upstreamPath = request.nextUrl.pathname.replace(
    /^\/api\/backend/,
    ""
  );

  const targetUrl = `${baseUrl}${upstreamPath}${request.nextUrl.search}`;

  const headers = new Headers();

  for (const key of ["accept", "content-type", "authorization"]) {
    const value = request.headers.get(key);
    if (value) headers.set(key, value);
  }

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body:
        request.method === "GET" || request.method === "HEAD"
          ? undefined
          : await request.arrayBuffer(),
      cache: "no-store",
    });

    const responseHeaders = new Headers();
    const contentType = response.headers.get("content-type");

    if (contentType) {
      responseHeaders.set("content-type", contentType);
    }

    const responseBody =
      [204, 205, 304].includes(response.status)
        ? null
        : await response.arrayBuffer();

    return new NextResponse(responseBody, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to connect to backend API" },
      { status: 502 }
    );
  }
}

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;
