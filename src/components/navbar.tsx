"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-gray-200/50 bg-white/80 backdrop-blur-xl"
            : isDark
              ? "bg-transparent"
              : "bg-white"
        )}
      >
        <nav className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Clear Digital Studio"
              width={180}
              height={45}
              className={cn(
                "h-8 w-auto transition-all duration-300",
                scrolled || !isDark ? "brightness-100" : "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors",
                  pathname === link.href
                    ? scrolled || !isDark
                      ? "text-ink"
                      : "text-white"
                    : scrolled || !isDark
                      ? "text-gray-500 hover:text-ink"
                      : "text-white/60 hover:text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              className={cn(
                "h-8 rounded-lg px-3.5 text-[12px] font-semibold transition-colors",
                scrolled || !isDark
                  ? "bg-ink text-white hover:bg-ink/90"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              <Link href="/contact">Get a quote</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "h-[1.5px] w-4 rounded-full transition-all duration-300",
                menuOpen
                  ? "translate-y-[3.25px] rotate-45 bg-ink"
                  : scrolled || !isDark
                    ? "bg-ink"
                    : "bg-white"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-4 rounded-full transition-all duration-300",
                menuOpen
                  ? "-translate-y-[3.25px] -rotate-45 bg-ink"
                  : scrolled || !isDark
                    ? "bg-ink"
                    : "bg-white"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-white transition-all duration-300 md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="mt-20 flex flex-col px-8">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "border-b border-gray-100 py-5 font-display text-2xl font-semibold transition-colors",
                pathname === link.href ? "text-ink" : "text-ink/70 hover:text-ink"
              )}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="px-8 pt-8">
          <Button
            asChild
            className="h-12 w-full rounded-xl bg-ink text-sm font-semibold text-white hover:bg-ink/90"
          >
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Get a quote
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
