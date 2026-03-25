"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={cn(
              "rounded-2xl border transition-colors",
              isOpen
                ? "border-gray-200 bg-white"
                : "border-transparent bg-gray-50 hover:bg-gray-100/60"
            )}
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className="font-heading text-sm font-semibold text-ink leading-snug">
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm transition-all",
                  isOpen
                    ? "rotate-45 bg-ink text-white"
                    : "bg-gray-200/70 text-gray-400"
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-60" : "max-h-0"
              )}
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-gray-400">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
