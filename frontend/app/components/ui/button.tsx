"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonLinkProps = SharedProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-primary bg-primary text-primary-foreground hover:bg-primary-hover hover:border-primary-hover",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-muted hover:border-border-strong",
  ghost:
    "border border-transparent bg-transparent text-muted-foreground hover:bg-surface-muted hover:text-foreground",
  danger:
    "border border-danger bg-danger text-white hover:bg-red-800 hover:border-red-800",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 gap-1.5 px-3 text-small",
  md: "h-10 gap-2 px-4 text-body-emphasis",
  lg: "h-11 gap-2 px-5 text-body-emphasis",
};

function getButtonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return [
    "inline-flex shrink-0 items-center justify-center rounded-md font-medium",
    "transition-colors duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClassName(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={getButtonClassName(variant, size, className)}
      {...props}
    >
      {children}
    </Link>
  );
}
