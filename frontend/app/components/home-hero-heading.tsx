"use client";

import { useEffect, useState } from "react";

const messages = [
  "Loay hoay tìm kiếm các công việc từ nhiều nền tảng",
  "Không biết nên ứng tuyển công việc ở đâu",
  "Ở đây tập hợp các công việc từ nhiều nền tảng giúp bạn nhanh chóng tìm được công việc thích hợp.",
] as const;

export function HomeHeroHeading() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visibleText, setVisibleText] = useState(messages[0].slice(0, 1));
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleText(messages[0]);
      return;
    }

    const currentMessage = messages[messageIndex];
    let timeoutId: number | undefined;

    if (!isDeleting && visibleText.length === currentMessage.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1900);
    } else if (isDeleting && visibleText.length === 0) {
      setIsDeleting(false);
      setMessageIndex((currentIndex) => (currentIndex + 1) % messages.length);
    } else {
      timeoutId = window.setTimeout(
        () => {
          setVisibleText((currentText) =>
            isDeleting
              ? currentText.slice(0, -1)
              : currentMessage.slice(0, currentText.length + 1),
          );
        },
        isDeleting ? 20 : 38,
      );
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isDeleting, messageIndex, visibleText]);

  return (
    <h1
      aria-label="Tìm kiếm việc làm từ nhiều nền tảng và nhanh chóng tìm được công việc phù hợp."
      className="mx-auto flex min-h-[190px] w-full max-w-4xl items-center justify-center text-page-title font-bold tracking-tight text-foreground sm:min-h-[144px] sm:text-display"
    >
      <span aria-hidden="true">{visibleText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[2px] shrink-0 rounded-full bg-primary motion-safe:animate-pulse"
      />
    </h1>
  );
}
