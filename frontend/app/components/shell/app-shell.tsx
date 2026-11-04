"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Tổng quan", href: "/" },
  { label: "Việc làm", href: "/jobs" },
  { label: "Phân tích thị trường", href: "/insights" },
  { label: "Data Pipeline", href: "/pipeline" },
] as const;

function Brand() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5 rounded-md outline-offset-4"
      aria-label="GomViệc - về trang tổng quan"
    >
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Gom<span className="text-primary">Việc</span>
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
    <nav
      aria-label="Điều hướng chính"
      className="flex flex-col gap-1 md:flex-row md:items-center"
    >
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
              "inline-flex min-h-10 items-center rounded-md px-3 text-body font-medium transition-colors duration-150 md:min-h-9",
              active
                ? "bg-primary-soft text-primary"
                : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
            ].join(" ")}
          >
            {item.label}
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
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
    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] w-full max-w-content items-center gap-5 px-4 sm:px-6 lg:px-8">
          <Brand />

          <div className="ml-auto hidden md:block">
            <Navigation pathname={pathname} />
          </div>

          <button
            ref={menuTriggerRef}
            type="button"
            aria-label={mobileMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="ml-auto inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
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
            ) : (
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
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          hidden={!mobileMenuOpen}
          className="border-t border-border bg-surface px-4 py-3 md:hidden"
        >
          <div className="mx-auto w-full max-w-content">
            <Navigation
              pathname={pathname}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      </header>

      <main className={[
        "mx-auto flex w-full max-w-content flex-1 flex-col px-4 sm:px-6 lg:px-8",
        pathname === "/" ? "pb-6 pt-0" : "py-6 sm:py-8",
      ].join(" ")}>
        {children}
      </main>

    </div>
  );
}
