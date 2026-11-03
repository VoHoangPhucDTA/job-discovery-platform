import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={[
        "h-10 w-full min-w-0 rounded-md border border-border bg-surface px-3 text-body text-foreground placeholder:text-subtle-foreground",
        "transition-colors duration-150",
        "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15",
        "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
