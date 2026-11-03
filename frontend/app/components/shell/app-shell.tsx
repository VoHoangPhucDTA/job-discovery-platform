"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Tổng quan", href: "/", icon: "overview" },
  { label: "Việc làm", href: "/jobs", icon: "jobs" },
  { label: "Phân tích thị trường", href: "/insights", icon: "insights" },
  { label: "Data Pipeline", href: "/pipeline", icon: "pipeline" },
] as const;

type NavigationIconName = (typeof navigation)[number]["icon"];

function NavigationIcon({ name }: { name: NavigationIconName }) {
  const common = {
    className: "size-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "overview":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "jobs":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13.5" rx="2" />
          <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2" />
        </svg>
      );
    case "insights":
      return (
        <svg {...common}>
          <path d="M4 19.5h16M6.5 16V11M12 16V5M17.5 16V8" />
          <circle cx="6.5" cy="9" r="1" />
          <circle cx="12" cy="3.5" r="1" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
      );
    case "pipeline":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="6" height="5" rx="1.2" />
          <rect x="15" y="15" width="6" height="5" rx="1.2" />
          <rect x="15" y="4" width="6" height="5" rx="1.2" />
          <path d="M9 6.5h3a3 3 0 0 1 3 3v5.5M12 15h3" />
        </svg>
      );
  }
}

function Brand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 rounded-md outline-offset-4"
      aria-label="Job Discovery Platform - về trang tổng quan"
    >
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-bold tracking-tight text-primary-foreground">
        JD
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="truncate text-body-emphasis font-semibold tracking-tight text-foreground">
          Job Discovery
        </span>
        <span className="text-small font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Data Platform
        </span>
      </span>
    </Link>
  );
}

function Navigation({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label="Điều hướng chính" className="space-y-1">
      {navigation.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={[
              "group flex min-h-10 items-center gap-3 rounded-md px-3 text-body font-medium transition-colors duration-150",
              active
                ? "bg-primary-soft text-primary"
                : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
            ].join(" ")}
          >
            <NavigationIcon name={item.icon} />
            <span className="min-w-0 flex-1">{item.label}</span>
            {active ? (
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuCloseButtonRef = useRef<HTMLButtonElement>(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      if (wasMenuOpenRef.current) {
        wasMenuOpenRef.current = false;
        menuTriggerRef.current?.focus();
      }
      return;
    }

    wasMenuOpenRef.current = true;
    menuCloseButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);
  const activeItem =
    navigation.find((item) =>
      item.href === "/"
        ? pathname === "/"
        : pathname === item.href || pathname.startsWith(`${item.href}/`),
    ) ?? navigation[0];

  return (
    <div className="min-h-screen bg-background text-foreground md:flex">
      {mobileMenuOpen ? (
        <button
          type="button"
          aria-label="Đóng menu điều hướng"
          className="fixed inset-0 z-40 cursor-default bg-foreground/30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}

      <aside
        id="mobile-navigation"
        className={[
          "z-50 w-[280px] shrink-0 flex-col border-r border-border bg-surface",
          mobileMenuOpen
            ? "fixed inset-y-0 left-0 flex shadow-lg"
            : "hidden",
          "md:sticky md:top-0 md:flex md:h-screen md:w-[248px] md:shadow-none",
        ].join(" ")}
      >
        <div className="flex h-18 items-center justify-between border-b border-border px-5">
          <Brand />
          <button
            ref={menuCloseButtonRef}
            type="button"
            aria-label="Đóng menu"
            className="rounded-md p-2 text-muted-foreground hover:bg-surface-muted md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-small font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
            Không gian
          </p>
          <Navigation
            pathname={pathname}
            onNavigate={() => setMobileMenuOpen(false)}
          />
        </div>

        <div className="border-t border-border p-4">
          <div className="rounded-md bg-surface-muted px-3 py-3">
            <p className="text-small font-semibold text-foreground">
              Thị trường việc làm IT Việt Nam
            </p>
            <p className="mt-1 text-small text-muted-foreground">
              Khám phá dữ liệu tuyển dụng và xu hướng thị trường.
            </p>
          </div>
          <p className="mt-3 px-1 text-small text-subtle-foreground">
            Job Discovery Platform
          </p>
        </div>
      </aside>

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-border bg-surface/95 px-4 backdrop-blur sm:px-6 lg:px-8">
          <button
            ref={menuTriggerRef}
            type="button"
            aria-label="Mở menu điều hướng"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-surface-muted md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <div className="min-w-0">
            <p className="hidden text-small text-muted-foreground sm:block">
              Job Discovery Platform
            </p>
            <p className="truncate text-body-emphasis font-semibold text-foreground">
              {activeItem.label}
            </p>
          </div>

          <div className="ml-auto hidden items-center gap-2 rounded-md border border-border px-3 py-1.5 sm:flex">
            <span className="text-small text-muted-foreground">
              Thị trường IT Việt Nam
            </span>
          </div>
        </header>

        <main className="mx-auto w-full max-w-content flex-1 px-4 py-6 sm:px-5 sm:py-8 lg:px-6">
          {children}
        </main>

        <footer className="border-t border-border px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-content flex-col gap-1 text-small text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>Job Discovery Platform</span>
            <span>Khám phá thị trường việc làm IT Việt Nam từ dữ liệu.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
