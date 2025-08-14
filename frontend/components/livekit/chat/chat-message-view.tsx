"use client";

import { type RefObject, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function useAutoScroll(
  scrollContentContainerRef: RefObject<Element | null>,
) {
  useEffect(() => {
    function scrollToBottom() {
      const container = scrollContentContainerRef.current;

      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }

    if (scrollContentContainerRef.current) {
      const resizeObserver = new ResizeObserver(scrollToBottom);

      resizeObserver.observe(scrollContentContainerRef.current);
      scrollToBottom();

      return () => resizeObserver.disconnect();
    }
  }, [scrollContentContainerRef]);
}
interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ChatMessageView = ({
  className,
  children,
  ...props
}: ChatProps) => {
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useAutoScroll(scrollContentRef);

  return (
    <div
      ref={scrollContentRef}
      className={cn("flex flex-col justify-end overflow-y-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};
