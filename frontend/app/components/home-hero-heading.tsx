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
      timeoutId = window.setTimeout(() => setIsDeleting(true), 3500);
    } else if (isDeleting && visibleText.length === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setMessageIndex((currentIndex) => (currentIndex + 1) % messages.length);
      }, 650);
    } else {
      timeoutId = window.setTimeout(
        () => {
          setVisibleText((currentText) =>
            isDeleting
              ? currentText.slice(0, -1)
              : currentMessage.slice(0, currentText.length + 1),
          );
        },
        isDeleting ? 32 : 55,
      );
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [isDeleting, messageIndex, visibleText]);

  const firstLineLength = [
    "Loay hoay tìm kiếm các",
    "Không biết nên ứng tuyển",
    "Tốn thời gian tìm kiếm",
  ][messageIndex].length;
  const firstLine = visibleText.slice(0, firstLineLength);
  const secondLine = visibleText.length > firstLineLength
    ? visibleText.slice(firstLineLength + 1)
    : "";

  return (
    <h1
      aria-label="Tìm kiếm việc làm từ nhiều nền tảng và nhanh chóng tìm được công việc phù hợp."
      className="mx-auto flex min-h-[190px] w-full items-center justify-center text-center text-page-title font-bold leading-tight tracking-tight text-foreground sm:min-h-[176px] sm:text-display md:min-h-[144px]"
    >
      <span aria-hidden="true" className="block w-full text-balance">
        {firstLine}
        <br />
        {secondLine}
        <span className="ml-1 inline-block h-[0.85em] w-[2px] align-baseline rounded-full bg-primary motion-safe:animate-pulse" />
      </span>
    </h1>
  );
}
