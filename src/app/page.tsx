import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { HeroGraphic } from '@/components/hero-graphic';
import { ArrowRight, Check } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import { Reviews } from '@/components/reviews';

const portfolioItems = portfolioData.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className='relative overflow-hidden bg-ink'>
        <div className='pointer-events-none absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-amber/[0.07] blur-[120px]' />
        <div className='pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[80px]' />

        <div className='relative mx-auto max-w-6xl px-6 pb-28 pt-40 md:pb-36 md:pt-48'>
          <div className='grid items-center gap-12 lg:grid-cols-[1fr_1fr]'>
            <div>
              <p className='text-[13px] font-medium tracking-wide text-white/50'>Web design for local businesses</p>

              <h1 className='mt-6 font-display text-[clamp(38px,5.8vw,68px)] font-semibold leading-[1.04] tracking-[-0.025em] text-white'>
                Websites that bring
                <br />
                in customers.
                <br />
                <span className='text-white/40'>Not just compliments.</span>
              </h1>

              <p className='mt-8 max-w-[420px] text-[15px] leading-[1.7] text-white/55'>
                We build fast, search-optimized websites for service businesses. Fixed pricing, no contracts, live in under two weeks.
              </p>

              <div className='mt-10 flex items-center gap-4'>
                <Button asChild className='h-11 rounded-xl bg-white px-5 text-[13px] font-semibold text-ink hover:bg-white/90'>
                  <Link href='/contact'>
                    Start a project
                    <ArrowRight className='ml-2 h-3.5 w-3.5' />
                  </Link>
                </Button>
                <Link href='/portfolio' className='text-[13px] font-medium text-white/60 transition-colors hover:text-white/80'>
                  See our work
                </Link>
              </div>
            </div>

            <div className='relative hidden aspect-square lg:block'>
              <HeroGraphic />
            </div>
          </div>

          {/* Proof strip */}
          <div className='mt-24 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/[0.06] pt-8'>
            {[
              { val: '100+', label: 'projects shipped' },
              { val: '9 day', label: 'avg delivery' },
              { val: '3×', label: 'avg lead increase' },
            ].map((s) => (
              <div key={s.label} className='flex items-baseline gap-2'>
                <span className='font-heading text-lg font-bold text-white/80'>{s.val}</span>
                <span className='text-xs text-white/50'>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What's wrong ── */}
      <Section className='bg-white'>
        <div className='grid items-start gap-20 lg:grid-cols-[1fr_380px]'>
          <div className='reveal'>
            <p className='text-xs font-semibold uppercase tracking-widest text-red-400/80'>The problem</p>
            <h2 className='mt-4 font-display text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] tracking-tight text-ink'>
              Most small business websites
              <br />
              cost money instead of making it.
            </h2>
            <p className='mt-5 max-w-lg text-[15px] leading-relaxed text-gray-400'>
              Slow load times, no Google visibility, broken on phones. If your site isn&apos;t actively bringing in leads, it&apos;s a liability.
            </p>

            <div className='mt-10 grid gap-y-5 sm:grid-cols-2 sm:gap-x-10'>
              {[
                ['8+ seconds', 'Average load time for small business sites'],
                ['75% of people', 'Judge credibility by website design'],
                ['Page 2 of Google', 'Gets less than 1% of all clicks'],
                ['60% of searches', 'Happen on mobile devices'],
              ].map(([stat, desc]) => (
                <div key={stat} className='border-l-2 border-gray-100 pl-4'>
                  <span className='font-heading text-sm font-bold text-ink'>{stat}</span>
                  <p className='mt-0.5 text-[13px] text-gray-400'>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='reveal reveal-delay-2 rounded-2xl bg-ink p-8'>
            <p className='text-xs font-semibold uppercase tracking-widest text-amber/70'>What we deliver</p>
            <h3 className='mt-3 font-display text-xl font-semibold text-white'>
              Fast sites that rank
              <br />
              and convert.
            </h3>
            <div className='mt-8 space-y-5'>
              {[
                { val: '98+', label: 'PageSpeed scores' },
                { val: '< 2s', label: 'Load times' },
                { val: 'Page 1', label: 'Google ranking goal' },
                { val: '7–14 days', label: 'Delivery window' },
              ].map((item) => (
                <div key={item.label} className='flex items-center justify-between border-b border-white/[0.06] pb-4 last:border-0 last:pb-0'>
                  <span className='text-sm text-white/60'>{item.label}</span>
                  <span className='font-heading text-base font-bold text-white'>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Services ── */}
      <div className='border-y border-gray-100 bg-gray-50/40 py-28 md:py-36'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-widest text-amber'>Services</p>
              <h2 className='mt-3 max-w-md font-display text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] tracking-tight text-ink'>Design, build, rank, maintain.</h2>
            </div>
            <Link href='/services' className='inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 transition-colors hover:text-ink'>
              All services <ArrowRight className='h-3 w-3' />
            </Link>
          </div>

          <div className='mt-14 grid gap-px overflow-hidden rounded-2xl border border-gray-200/70 bg-gray-200/50 sm:grid-cols-2 lg:grid-cols-5'>
            {[
              { title: 'Design', desc: 'Custom layouts built for your market' },
              { title: 'Development', desc: 'Fast code, under 2s load time' },
              { title: 'Local SEO', desc: 'Get found on Google Maps & search' },
              { title: 'Lead Gen', desc: 'Turn traffic into calls & bookings' },
              { title: 'Maintenance', desc: 'Updates, backups, ongoing support' },
            ].map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${Math.min(i + 1, 5)} bg-white p-6 lg:p-7`}>
                <h3 className='font-heading text-sm font-semibold text-ink'>{s.title}</h3>
                <p className='mt-1.5 text-[13px] leading-relaxed text-gray-400'>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className='reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-3'>
            {['Fixed pricing from $1,499', 'No long-term contracts', 'Free 30-min consultation'].map((item) => (
              <span key={item} className='flex items-center gap-2 text-[13px] text-gray-400'>
                <Check className='h-3.5 w-3.5 text-amber' />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Work ── */}
      <Section className='bg-white'>
        <div className='reveal'>
          <p className='text-xs font-semibold uppercase tracking-widest text-amber'>Recent work</p>
          <div className='mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <h2 className='max-w-sm font-display text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] tracking-tight text-ink'>Businesses we&apos;ve helped grow.</h2>
            <Button asChild variant='outline' className='rounded-xl text-[13px]'>
              <Link href='/portfolio'>
                All projects <ArrowRight className='ml-1.5 h-3.5 w-3.5' />
              </Link>
            </Button>
          </div>
        </div>

        <div className='mt-14 grid gap-5 md:grid-cols-3'>
          {portfolioItems.map((item, i) => (
            <div key={item.id} className={`reveal reveal-delay-${i + 1} group`}>
              <div className='aspect-[4/3] overflow-hidden rounded-xl bg-gray-100'>
                <Image src={item.image} alt={item.imageAlt} width={800} height={600} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' />
              </div>
              <div className='mt-4'>
                <span className='text-[11px] font-medium uppercase tracking-wider text-gray-500'>{item.tag}</span>
                <h3 className='mt-1 font-heading text-[15px] font-semibold text-ink'>{item.title}</h3>
                <p className='mt-1.5 text-[13px] leading-relaxed text-gray-400' dangerouslySetInnerHTML={{ __html: item.result }} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Reviews ── */}
      <Reviews />

      {/* ── Process ── Horizontal, compact, not a separate section with its own label/title/description */}
      <Section className='bg-white'>
        <div className='reveal'>
          <p className='text-xs font-semibold uppercase tracking-widest text-amber'>How it works</p>
          <h2 className='mt-3 max-w-sm font-display text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] tracking-tight text-ink'>Idea to live site in four steps.</h2>
        </div>

        <div className='mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              n: '01',
              title: 'Talk',
              desc: '30 minutes on a call. We learn what you need, you learn how we work.',
            },
            {
              n: '02',
              title: 'Plan',
              desc: 'Mockups, sitemap, and a clear timeline. Nothing gets built until you approve.',
            },
            {
              n: '03',
              title: 'Build',
              desc: 'We develop, optimize, and test. You review along the way.',
            },
            {
              n: '04',
              title: 'Ship',
              desc: 'Site goes live. We monitor performance and stay available for tweaks.',
            },
          ].map((step, i) => (
            <div key={step.n} className={`reveal reveal-delay-${i + 1}`}>
              <span className='font-heading text-4xl font-bold text-gray-100'>{step.n}</span>
              <h3 className='mt-2 font-heading text-sm font-semibold text-ink'>{step.title}</h3>
              <p className='mt-1.5 text-[13px] leading-relaxed text-gray-400'>{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <div className='bg-ink py-28 md:py-36'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='reveal mx-auto max-w-xl text-center'>
            <h2 className='font-display text-[clamp(28px,3.8vw,44px)] font-semibold leading-[1.12] tracking-tight text-white'>
              Let&apos;s get your site
              <br />
              <em className='italic text-amber-light'>working for you.</em>
            </h2>
            <p className='mt-5 text-[15px] leading-relaxed text-white/55'>
              Free 30-minute call. We&apos;ll look at what you have, tell you what&apos;s possible, and be honest about whether we&apos;re the right fit.
            </p>
            <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
              <Button asChild className='h-11 rounded-xl bg-white px-5 text-[13px] font-semibold text-ink hover:bg-white/90'>
                <Link href='/contact'>
                  Book a call <ArrowRight className='ml-2 h-3.5 w-3.5' />
                </Link>
              </Button>
              <Link href='/services#pricing' className='text-[13px] font-medium text-white/55 transition-colors hover:text-white/80'>
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
