"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ArrowRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const categories = ["All", "Trades", "Health", "Cleaning", "Beauty"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  const featuredItems = portfolioData.filter((item) => item.featured);

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-amber/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="max-w-2xl">
            <span className="reveal inline-block font-heading text-xs font-semibold uppercase tracking-wider text-amber-light">
              Work
            </span>

            <h1 className="reveal reveal-delay-1 mt-6 font-display text-[clamp(36px,5vw,64px)] font-semibold leading-[1.08] tracking-tight text-white">
              Projects we&apos;ve shipped.
            </h1>

            <p className="reveal reveal-delay-2 mt-6 max-w-lg text-lg leading-relaxed text-white/60">
              Every project started with a local business that needed a better
              website.
            </p>

            <div className="reveal reveal-delay-3 mt-10">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-white text-ink hover:bg-white/90 h-12 px-6 text-sm font-semibold"
              >
                <Link href="/contact">
                  Start your project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Portfolio Grid ── */}
      <Section className="bg-white">
        {/* Filter Pills */}
        <div className="reveal flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? "bg-ink text-white"
                  : "text-gray-400 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className="reveal group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                  {item.tag}
                </span>
                <h3 className="mt-1.5 font-heading text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p
                  className="mt-1.5 text-[13px] leading-relaxed text-gray-400"
                  dangerouslySetInnerHTML={{ __html: item.result }}
                />
                <p className="mt-2 text-[12px] text-gray-500">
                  {item.services}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              No projects in this category yet. Check back soon.
            </p>
          </div>
        )}
      </Section>

      {/* ── Featured Case Studies ── */}
      <section className="border-t border-gray-100 bg-gray-50/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            Case studies
          </h2>

          <div className="mt-14 space-y-16">
            {featuredItems.map((item, i) => (
              <div
                key={item.id}
                className={`reveal reveal-delay-${i + 1} flex flex-col gap-8 md:flex-row md:items-start md:gap-12`}
              >
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 md:w-80 lg:w-96">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-400">
                    {item.caseStudy.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
                    {item.caseStudy.metrics.map((metric, mi) => (
                      <span key={metric.label} className="flex items-baseline gap-x-6">
                        {mi > 0 && (
                          <span className="text-gray-200" aria-hidden="true">
                            &middot;
                          </span>
                        )}
                        <span className="flex items-baseline gap-1.5">
                          <span className="font-heading text-lg font-bold text-ink">
                            {metric.value}
                          </span>
                          <span className="text-[12px] text-gray-400">
                            {metric.label}
                          </span>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="reveal flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Have a project in mind?
            </h2>
            <Button
              asChild
              size="lg"
              className="shrink-0 rounded-xl bg-white text-ink hover:bg-white/90 h-12 px-6 text-sm font-semibold"
            >
              <Link href="/contact">
                Book a call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
