import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { Faq } from "@/components/faq";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Services — Clear Digital Studio | Web Design & Development for Local Business",
  description:
    "Custom website design, development, SEO, and ongoing support for small businesses. Transparent pricing, fast delivery, no contracts.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    title: "Website Design",
    desc: "Custom layouts built around your brand and your customers.",
  },
  {
    title: "Web Development",
    desc: "Clean, fast code with modern frameworks. Under 2-second loads.",
  },
  {
    title: "WordPress",
    desc: "CMS sites you can actually update yourself without breaking anything.",
  },
  {
    title: "Local SEO",
    desc: "Show up when nearby customers search for what you do.",
  },
  {
    title: "Speed Optimization",
    desc: "Audits, fixes, and monitoring to keep your Core Web Vitals green.",
  },
  {
    title: "Care & Maintenance",
    desc: "Updates, backups, uptime monitoring, and priority support.",
  },
  {
    title: "Local Growth",
    desc: "Landing pages, forms, and conversion tracking that bring in leads.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$1,499",
    desc: "A clean, professional site for businesses getting started online.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "On-page SEO setup",
      "Contact forms",
      "Google Analytics integration",
      "14-day delivery",
    ],
    cta: "Get started",
    href: "/contact",
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,999",
    desc: "For businesses ready to compete and attract more customers.",
    features: [
      "Everything in Starter",
      "Up to 7 pages",
      "Local SEO setup",
      "Professional copywriting",
      "Speed optimization",
      "Unlimited revisions",
      "21-day delivery",
    ],
    cta: "Get started",
    href: "/contact",
    featured: true,
  },
  {
    name: "Custom",
    price: "Let\u2019s talk",
    desc: "Larger projects with custom functionality or integrations.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce support",
      "API integrations",
      "Dedicated project manager",
      "Timeline based on scope",
    ],
    cta: "Book a call",
    href: "/contact",
    featured: false,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "We learn about your business, your customers, and what a win looks like.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "Sitemap, content direction, and design approach locked in before any code.",
  },
  {
    num: "03",
    title: "Design",
    desc: "You review mockups and we refine until the look and feel is right.",
  },
  {
    num: "04",
    title: "Build",
    desc: "Fast, accessible code with mobile-first responsiveness throughout.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "Final testing, your sign-off, and we handle all the deployment details.",
  },
  {
    num: "06",
    title: "Support",
    desc: "We stick around for updates, maintenance, and whatever comes next.",
  },
];

const faqItems = [
  {
    q: "How much does a website cost?",
    a: "Packages start at $1,499 for a 5-page site. Most small business projects fall between $1,500 and $5,000 depending on pages and features. We always provide a fixed quote upfront so there are no surprises.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A Starter project takes about 14 days from kickoff to launch. Growth packages take around 21 days. Custom projects vary based on scope, but we agree on a timeline before we start.",
  },
  {
    q: "How many revisions do I get?",
    a: "Starter packages include two rounds of revisions. Growth packages include unlimited revisions. We work with you until it feels right.",
  },
  {
    q: "Do I need to provide all the content?",
    a: "You can, but you don\u2019t have to. Growth and Custom packages include professional copywriting. For Starter packages, we provide a content template that makes writing straightforward.",
  },
  {
    q: "Will my site be optimized for search engines?",
    a: "Every package includes on-page SEO fundamentals: meta tags, heading structure, image alt text, and fast load times. Growth and Custom packages include deeper local SEO setup.",
  },
  {
    q: "Do you handle hosting?",
    a: "We recommend and set up hosting for you, or deploy to your existing provider. We typically use Vercel or managed WordPress hosting depending on the project. Hosting costs are separate from build fees.",
  },
  {
    q: "What happens after the site launches?",
    a: "We offer Care & Maintenance plans that include updates, backups, monitoring, and priority support. You can also reach out anytime for one-off changes.",
  },
  {
    q: "I already have a website. Can you redesign it?",
    a: "A lot of our clients come to us with an existing site that\u2019s outdated or underperforming. We audit what you have and build something better, often reusing content and assets that still work.",
  },
  {
    q: "Who owns the website when it\u2019s done?",
    a: "You do. 100% of the design, code, and content. We hand over everything when the project wraps. No lock-in, no proprietary platforms.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-amber/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber">
              Services
            </span>

            <h1 className="reveal mt-6 font-display text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-tight text-white">
              Design, development, SEO, and ongoing support.
            </h1>

            <p className="reveal reveal-delay-1 mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
              We handle the full picture so you can run your business. One team
              for everything from first mockup to post-launch maintenance.
            </p>

            <div className="reveal reveal-delay-2 mt-10 flex items-center gap-6">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-white px-6 text-sm font-semibold text-ink hover:bg-white/90"
              >
                <Link href="/contact">
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="#pricing"
                className="text-[13px] font-medium text-white/60 transition-colors hover:text-white"
              >
                View pricing
              </Link>
            </div>

            <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/50">
              {["No contracts", "Fixed pricing", "Free consultation"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-amber-light" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===== SERVICES ===== */}
      <Section>
        <div className="reveal flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber">
              What we do
            </span>
            <h2 className="mt-3 font-display text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight text-ink">
              Services built around your goals
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-[13px] font-medium text-gray-400 transition-colors hover:text-ink"
          >
            Have a question? Talk to us &rarr;
          </Link>
        </div>

        <div className="reveal reveal-delay-1 mt-12 divide-y divide-gray-100">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <h3 className="font-heading text-[15px] font-semibold text-ink">
                {s.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== PRICING ===== */}
      <section
        id="pricing"
        className="border-t border-gray-100 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal font-display text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight text-ink">
            Transparent pricing
          </h2>

          <div className="reveal reveal-delay-1 mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => {
              const dark = plan.featured;
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    dark
                      ? "border-transparent bg-ink text-white"
                      : "border-gray-200/70 bg-white"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 text-xs font-semibold text-ink">
                      Most popular
                    </span>
                  )}

                  <h3
                    className={`font-heading text-[15px] font-semibold ${dark ? "text-white" : "text-ink"}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span
                      className={`font-display text-4xl font-semibold tracking-tight ${dark ? "text-white" : "text-ink"}`}
                    >
                      {plan.price}
                    </span>
                    {!plan.price.includes("talk") && (
                      <span
                        className={`ml-1.5 text-[13px] ${dark ? "text-white/60" : "text-gray-400"}`}
                      >
                        one-time
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-3 text-[13px] leading-relaxed ${dark ? "text-white/70" : "text-gray-400"}`}
                  >
                    {plan.desc}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-[13px] ${dark ? "text-white/80" : "text-gray-600"}`}
                      >
                        <Check
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${dark ? "text-amber" : "text-amber"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className={`mt-8 h-11 w-full rounded-xl text-sm font-semibold ${
                      dark
                        ? "bg-white text-ink hover:bg-white/90"
                        : "bg-gray-100 text-ink hover:bg-gray-200/70"
                    }`}
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          <p className="reveal reveal-delay-2 mt-10 text-[13px] text-gray-400">
            All packages include responsive design, SEO fundamentals, and
            analytics setup.
          </p>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="border-y border-gray-100 bg-gray-50/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="reveal font-display text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight text-ink">
            How a project works
          </h2>

          <div className="reveal reveal-delay-1 mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.num}>
                <span className="font-display text-5xl font-bold leading-none text-gray-200/80">
                  {step.num}
                </span>
                <h3 className="mt-3 font-heading text-[15px] font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-gray-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="reveal font-display text-[clamp(28px,3.5vw,42px)] font-semibold tracking-tight text-ink">
            Questions
          </h2>

          <div className="reveal reveal-delay-1 mt-10">
            <Faq items={faqItems} />
          </div>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <div className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 sm:flex-row sm:items-center md:py-24">
          <div>
            <h2 className="reveal font-display text-[clamp(24px,3vw,36px)] font-semibold tracking-tight text-white">
              Ready to get started?
            </h2>
            <p className="reveal reveal-delay-1 mt-2 text-[15px] text-white/60">
              Book a free 15-minute call. We&apos;ll talk goals, timeline, and
              budget.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="reveal reveal-delay-2 h-12 shrink-0 rounded-xl bg-white px-6 text-sm font-semibold text-ink hover:bg-white/90"
          >
            <Link href="/contact">
              Book a call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
