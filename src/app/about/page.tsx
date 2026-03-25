import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Clear Digital Studio | Built for Small Business",
  description:
    "Clear Digital Studio is an Edmonton-based web design agency focused on local service businesses. 100+ projects delivered, 9-day average turnaround, and 98+ PageSpeed scores.",
};

const team = [
  {
    name: "Alex Chen",
    role: "Founder & Design",
    initials: "AC",
    bio: "10+ years in digital. Obsessed with clean design that actually converts.",
    gradient: "from-amber/80 to-amber-light/80",
  },
  {
    name: "Sarah Mitchell",
    role: "Development",
    initials: "SM",
    bio: "Full-stack developer who treats page speed like a feature.",
    gradient: "from-blue-500/80 to-cyan-400/80",
  },
  {
    name: "James Park",
    role: "SEO & Growth",
    initials: "JP",
    bio: "Helps local businesses show up where it counts.",
    gradient: "from-emerald-500/80 to-teal-400/80",
  },
];

const values = [
  {
    title: "Results over vanity metrics",
    description:
      "We care about calls and bookings, not impressions. If your site looks great but nobody contacts you, we haven't done our job.",
  },
  {
    title: "Ship in days, not months",
    description:
      "Most projects go live in under two weeks. You have a business to run — we don't drag things out.",
  },
  {
    title: "Prices you know upfront",
    description:
      "Fixed quotes before we start. No hourly billing, no surprise invoices, no scope creep.",
  },
  {
    title: "Built for local markets",
    description:
      "We know how local customers search and what makes them pick up the phone. That's baked into every site.",
  },
  {
    title: "No black boxes",
    description:
      "You see every step. No jargon, no mystery processes, no waiting weeks for a status update.",
  },
  {
    title: "We stick around after launch",
    description:
      "Updates, tweaks, questions — we're here. We don't hand off a site and disappear.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-ink">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-2xl text-center">
            <span className="reveal text-xs font-semibold uppercase tracking-widest text-amber">
              About
            </span>

            <h1 className="reveal reveal-delay-1 mt-6 font-display text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-tight text-white">
              A small team that builds websites for small businesses.
            </h1>

            <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
              We&apos;re based in Edmonton and we work with service businesses
              — trades, clinics, cleaners, contractors. If you serve your
              local community, we build the site that brings customers to
              your door.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <Section className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="reveal">
            <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] tracking-tight text-ink">
              Started in 2021.
            </h2>
            <div className="mt-8 overflow-hidden rounded-xl">
              <Image
                src="/images/team.jpg"
                alt="Clear Digital Studio team collaborating in a modern workspace"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="space-y-5 text-[15px] leading-relaxed text-gray-500">
              <p>
                We kept seeing the same thing. Local businesses — the ones
                that actually keep neighbourhoods running — were paying
                agencies thousands of dollars and ending up with slow,
                generic sites that didn&apos;t generate a single lead. It
                didn&apos;t sit right with us.
              </p>
              <p>
                So we decided to specialize. Plumbers, clinics, cleaners,
                landscapers, contractors — people who do real work for real
                customers. We learned what their clients care about, how they
                search, and what makes them pick up the phone. Then we built
                a process around that.
              </p>
              <p>
                Over a hundred projects later, we&apos;re still doing the
                same thing: building sites that load fast, rank well, and
                actually bring in business. No fluff. No jargon. Just good
                work for good businesses.
              </p>
            </div>

            <p className="mt-8 text-[13px] font-medium tracking-wide text-gray-400">
              100+ projects &middot; 9-day avg turnaround &middot; 98+
              PageSpeed &middot; 5.0&#9733; rating
            </p>
          </div>
        </div>
      </Section>

      {/* Team */}
      <section className="border-y border-gray-100 bg-gray-50/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal font-display text-[clamp(24px,3vw,36px)] font-semibold tracking-tight text-ink">
            The team
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-start gap-4`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-xs font-bold text-white`}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">
                    {member.name}
                  </h3>
                  <p className="text-[13px] font-medium text-amber">
                    {member.role}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-gray-400">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <Section className="bg-white">
        <h2 className="reveal font-display text-[clamp(24px,3vw,36px)] font-semibold tracking-tight text-ink">
          How we work
        </h2>

        <div className="mt-12 grid gap-x-16 gap-y-8 sm:grid-cols-2">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} border-l-2 border-gray-100 py-1 pl-5`}
            >
              <h3 className="text-[15px] font-semibold text-ink">
                {value.title}
              </h3>
              <p className="mt-1 text-[14px] leading-relaxed text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <section className="bg-gray-50/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mx-auto max-w-3xl">
            <blockquote className="font-display text-[clamp(20px,2.5vw,28px)] font-medium leading-[1.5] tracking-tight text-ink">
              &ldquo;They kept us in the loop at every step, and the final
              site was exactly what we needed. Our phone hasn&apos;t stopped
              ringing since it went live.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                DT
              </div>
              <div>
                <p className="text-[14px] font-semibold text-ink">
                  Derek Thompson
                </p>
                <p className="text-[13px] text-gray-400">
                  Thompson Plumbing, Ottawa
                </p>
              </div>
            </div>
            <p className="reveal reveal-delay-1 mt-10 text-[13px] text-gray-400">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1 font-medium text-ink underline decoration-gray-200 underline-offset-4 transition-colors hover:decoration-ink"
              >
                Read more on our work page
                <ArrowRight className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-lg">
              <h2 className="font-display text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] tracking-tight text-white">
                Want to work together?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                Book a free 30-minute call. We&apos;ll look at your current
                site and give you an honest recommendation — no pressure.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="h-12 shrink-0 rounded-xl bg-white px-8 text-sm font-semibold text-ink hover:bg-white/90"
            >
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
