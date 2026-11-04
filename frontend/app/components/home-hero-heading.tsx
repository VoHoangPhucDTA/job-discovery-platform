"use client";

import { useEffect, useState } from "react";

const messages = [
  "Loay hoay tìm kiếm các công việc từ nhiều nền tảng",
  "Không biết nên ứng tuyển công việc ở đâu",
  "Tốn thời gian tìm kiếm công việc từ nhiều nền tảng?",
] as const;

export function HomeHeroHeading() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visibleText, setVisibleText] = useState(messages[0].slice(0, 1));
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimeout = window.setTimeout(
        () => setVisibleText(messages[0]),
        0,
      );
      return () => window.clearTimeout(reducedMotionTimeout);
    }

    const currentMessage = messages[messageIndex];
    let timeoutId: number | undefined;

    if (!isDeleting && visibleText.length === currentMessage.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1900);
    } else if (isDeleting && visibleText.length === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setMessageIndex((currentIndex) => (currentIndex + 1) % messages.length);
      }, 0);
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
      className="mx-auto flex min-h-[228px] w-full max-w-4xl items-center justify-center text-page-title font-bold tracking-tight text-foreground min-[375px]:min-h-[190px] min-[480px]:min-h-[152px] sm:min-h-[176px] sm:text-display md:min-h-[144px]"
    >
      <span aria-hidden="true">{visibleText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[2px] shrink-0 rounded-full bg-primary motion-safe:animate-pulse"
      />
    </h1>
  );
}
