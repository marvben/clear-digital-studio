'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Section } from '@/components/section';
import { Faq } from '@/components/faq';
import { ArrowRight, Check, Mail, Phone, Clock } from 'lucide-react';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const projectTypes = ['Brand new website', 'Website redesign', 'WordPress', 'Shopify', 'Landing Page', 'Sales Page', 'Local SEO', 'Speed optimization', 'Maintenance', 'Growth', 'Not sure yet'];

const budgetRanges = ['Under $1,500', '$1,500\u2013$3,000', '$3,000\u2013$6,000', '$6,000+', 'Not sure yet'];

const faqItems = [
  {
    q: 'How quickly will I hear back?',
    a: 'Within one business day, usually sooner. If you reach out on a weekend, expect a reply Monday morning. No auto-responders\u2014you\u2019ll hear from a real person.',
  },
  {
    q: 'Do I need to prepare anything before reaching out?',
    a: 'Not at all. Just tell us a bit about your business and what you\u2019re hoping to achieve. We\u2019ll ask the right questions and guide the conversation from there.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'That\u2019s our entire focus. Local shops, trades, clinics, restaurants\u2014if you serve customers in your area, we\u2019re built for you.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most websites go live within 2\u20134 weeks. Larger projects with custom features can take 4\u20136 weeks. We\u2019ll give you a clear timeline before any work begins.',
  },
  {
    q: 'Is the consultation actually free?',
    a: 'Yes, completely. No strings, no pressure. We\u2019ll talk through your goals, give you honest advice, and you decide if we\u2019re the right fit.',
  },
  {
    q: 'What if I\u2019m not sure what I need?',
    a: 'Most people aren\u2019t\u2014that\u2019s what the consultation is for. We\u2019ll help you figure out what makes sense for your business and budget.',
  },
];

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const onRecaptchaLoad = useCallback(() => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => setRecaptchaReady(true));
    }
  }, []);

  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => setRecaptchaReady(true));
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const business = formData.get('business') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !business || !message) return;

    setSubmitting(true);

    try {
      let recaptchaToken = '';
      if (RECAPTCHA_SITE_KEY && window.grecaptcha && recaptchaReady) {
        recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
          action: 'contact_submit',
        });
      }

      const { data } = await axios.post('/api/contact', {
        name,
        email,
        business,
        phone: formData.get('phone') as string,
        projectType: formData.get('projectType') as string,
        budget: formData.get('budget') as string,
        message,
        recaptchaToken,
        website: formData.get('website') as string, // honeypot
      });

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.errors?.[0] || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.errors?.[0]) {
        setError(err.response.data.errors[0]);
      } else {
        setError('Could not send your message. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY && <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} onLoad={onRecaptchaLoad} />}

      {/* ── Hero ── */}
      <section className='bg-ink pt-36 pb-16'>
        <div className='mx-auto max-w-6xl px-6'>
          <h1 className='reveal font-display text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl'>Get in touch.</h1>
          <p className='reveal reveal-delay-1 mt-4 text-lg text-white/60'>We reply within one business day.</p>

          <div className='reveal reveal-delay-2 mt-8 flex flex-wrap items-center gap-6 text-sm text-white/50'>
            <span className='flex items-center gap-2'>
              <Check className='size-3.5 text-amber/70' />
              Reply in 1 day
            </span>
            <span className='text-white/10'>&middot;</span>
            <span className='flex items-center gap-2'>
              <Check className='size-3.5 text-amber/70' />
              Free consultation
            </span>
            <span className='text-white/10'>&middot;</span>
            <span className='flex items-center gap-2'>
              <Check className='size-3.5 text-amber/70' />
              Fixed pricing
            </span>
          </div>
        </div>
      </section>

      {/* ── Form + Contact Details ── */}
      <Section className='bg-white'>
        <div className='grid items-start gap-12 lg:grid-cols-[1fr_380px]'>
          {/* Form */}
          <div className='reveal'>
            {submitted ? (
              <div className='flex flex-col items-center justify-center py-20 text-center'>
                <div className='flex size-14 items-center justify-center rounded-full bg-green-50'>
                  <Check className='size-6 text-green-600' />
                </div>
                <p className='mt-6 font-display text-xl font-semibold text-ink'>Got it. We&apos;ll be in touch.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError('');
                  }}
                  className='mt-6 text-sm text-gray-400 underline underline-offset-4 hover:text-ink transition-colors'
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className='space-y-5'>
                {/* Honeypot — invisible to users, bots fill it */}
                <div className='hidden' aria-hidden='true'>
                  <label htmlFor='website'>Website</label>
                  <input type='text' id='website' name='website' tabIndex={-1} autoComplete='off' />
                </div>

                {/* Name + Email */}
                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='name' className='mb-1.5 block text-sm font-medium text-ink'>
                      Name <span className='text-red-400'>*</span>
                    </label>
                    <Input id='name' name='name' placeholder='Your name' required className='h-10 rounded-lg' />
                  </div>
                  <div>
                    <label htmlFor='email' className='mb-1.5 block text-sm font-medium text-ink'>
                      Email <span className='text-red-400'>*</span>
                    </label>
                    <Input id='email' name='email' type='email' placeholder='you@company.com' required className='h-10 rounded-lg' />
                  </div>
                </div>

                {/* Business + Phone */}
                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='business' className='mb-1.5 block text-sm font-medium text-ink'>
                      Business Name <span className='text-red-400'>*</span>
                    </label>
                    <Input id='business' name='business' placeholder='Your business' required className='h-10 rounded-lg' />
                  </div>
                  <div>
                    <label htmlFor='phone' className='mb-1.5 block text-sm font-medium text-ink'>
                      Phone <span className='text-gray-500'>(optional)</span>
                    </label>
                    <Input id='phone' name='phone' type='tel' placeholder='(416) 555-0100' className='h-10 rounded-lg' />
                  </div>
                </div>

                {/* Project Type + Budget */}
                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='projectType' className='mb-1.5 block text-sm font-medium text-ink'>
                      Project Type
                    </label>
                    <select
                      id='projectType'
                      name='projectType'
                      defaultValue=''
                      className='h-10 w-full rounded-lg border border-input bg-white px-3 text-sm text-ink outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50'
                    >
                      <option value='' disabled>
                        Select a project type
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor='budget' className='mb-1.5 block text-sm font-medium text-ink'>
                      Budget
                    </label>
                    <select
                      id='budget'
                      name='budget'
                      defaultValue=''
                      className='h-10 w-full rounded-lg border border-input bg-white px-3 text-sm text-ink outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50'
                    >
                      <option value='' disabled>
                        Select a range
                      </option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor='message' className='mb-1.5 block text-sm font-medium text-ink'>
                    Message <span className='text-red-400'>*</span>
                  </label>
                  <Textarea id='message' name='message' placeholder='Tell us about your project, goals, or any questions you have...' required rows={5} className='rounded-lg' />
                </div>

                {error && <p className='text-sm text-red-500'>{error}</p>}

                {/* Submit */}
                <Button type='submit' disabled={submitting} className='h-12 w-full rounded-xl bg-ink text-sm font-semibold text-white hover:bg-ink/90'>
                  {submitting ? 'Sending...' : 'Send message'}
                  {!submitting && <ArrowRight className='ml-2 size-4' />}
                </Button>

                <p className='text-center text-xs text-gray-400'>
                  Your information is kept private and never shared.
                  {RECAPTCHA_SITE_KEY && (
                    <>
                      {' '}
                      Protected by{' '}
                      <a href='https://www.google.com/recaptcha/about/' target='_blank' rel='noopener noreferrer' className='underline underline-offset-2'>
                        reCAPTCHA
                      </a>
                      .
                    </>
                  )}
                </p>
              </form>
            )}
          </div>

          {/* Contact details sidebar */}
          <div className='reveal reveal-delay-1 lg:sticky lg:top-28'>
            <div className='rounded-2xl border border-gray-100 bg-gray-50/50 p-7'>
              <h3 className='font-display text-lg font-semibold text-ink'>Contact details</h3>

              <div className='mt-6 space-y-5'>
                <div className='flex items-start gap-3'>
                  <Mail className='mt-0.5 size-4 shrink-0 text-amber' />
                  <div>
                    <p className='text-xs font-medium uppercase tracking-wider text-gray-400'>Email</p>
                    <a href='mailto:hello@cleardigitalstudio.ca' className='mt-0.5 block text-sm font-semibold text-ink hover:text-amber transition-colors'>
                      hello@cleardigitalstudio.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Phone className='mt-0.5 size-4 shrink-0 text-amber' />
                  <div>
                    <p className='text-xs font-medium uppercase tracking-wider text-gray-400'>Phone</p>
                    <a href='tel:+14165550100' className='mt-0.5 block text-sm font-semibold text-ink hover:text-amber transition-colors'>
                      +1 (416) 555-0100
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Clock className='mt-0.5 size-4 shrink-0 text-amber' />
                  <div>
                    <p className='text-xs font-medium uppercase tracking-wider text-gray-400'>Hours</p>
                    <p className='mt-0.5 text-sm font-semibold text-ink'>Mon&ndash;Fri, 9am&ndash;6pm EST</p>
                  </div>
                </div>
              </div>

              <div className='mt-8 rounded-xl bg-ink p-5'>
                <p className='text-sm font-semibold text-white'>Prefer a call?</p>
                <p className='mt-1.5 text-xs leading-relaxed text-white/60'>Book a free 15-minute consultation. No pressure, just honest advice about your project.</p>
                <a href='tel:+14165550100' className='mt-4 inline-flex items-center gap-2 text-xs font-semibold text-amber transition-colors hover:text-amber-light'>
                  Call us now
                  <ArrowRight className='size-3' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <section className='border-t border-gray-100 bg-gray-50/40 py-24 md:py-32'>
        <div className='mx-auto max-w-6xl px-6'>
          <div className='mx-auto max-w-2xl'>
            <h2 className='reveal font-display text-2xl font-semibold text-ink'>Common questions</h2>

            <div className='reveal reveal-delay-1 mt-10'>
              <Faq items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='bg-ink py-20 md:py-24'>
        <div className='mx-auto max-w-6xl px-6 text-center'>
          <p className='reveal mx-auto max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl'>
            Every day without a working website is a <span className='text-amber'>missed opportunity</span>.
          </p>
          <p className='reveal reveal-delay-1 mt-6 text-sm text-white/50'>
            Scroll up to send us a message, or call{' '}
            <a href='tel:+14165550100' className='text-white/70 hover:text-white transition-colors'>
              +1 (416) 555-0100
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
