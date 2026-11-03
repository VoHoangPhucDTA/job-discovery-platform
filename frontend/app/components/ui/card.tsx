import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-lg border border-border bg-surface",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div
      className={["flex flex-col gap-1.5 p-5 sm:p-6", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return (
    <div
      className={["px-5 pb-5 sm:px-6 sm:pb-6", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
