"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const setup = () => {
      const elements = document.querySelectorAll(".reveal:not(.visible)");
      if (!elements.length) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "40px 0px -20px 0px" }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    let observer = setup();

    // Re-scan after navigation once DOM settles
    const frame = requestAnimationFrame(() => {
      observer?.disconnect();
      observer = setup();
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
