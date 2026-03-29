'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import reviews from '@/data/reviews.json';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < Math.round(rating) ? 'fill-amber text-amber' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className='w-[340px] shrink-0 rounded-xl border border-gray-100 bg-white p-6'>
      <StarRating rating={review.rating} />
      <p className='mt-3 text-[13px] leading-relaxed text-gray-500 italic'>
        &ldquo;{review.review}&rdquo;
      </p>
      <p className='mt-4 text-[12px] font-medium text-gray-400'>{review.project}</p>
    </div>
  );
}

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let lastTime = 0;
    const speed = 0.5; // px per frame at 60fps

    function step(time: number) {
      if (lastTime && !paused) {
        const delta = (time - lastTime) * (speed * 60) / 1000;
        el!.scrollLeft += delta;

        // Reset to start when halfway (duplicate set begins)
        if (el!.scrollLeft >= el!.scrollWidth / 2) {
          el!.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationId = requestAnimationFrame(step);
    }

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [paused]);

  // Duplicate reviews for seamless loop
  const doubled = [...reviews, ...reviews];

  return (
    <div className='bg-gray-50/40 py-28 md:py-36'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='reveal'>
          <p className='text-xs font-semibold uppercase tracking-widest text-amber'>Client feedback</p>
          <div className='mt-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between'>
            <h2 className='max-w-lg font-display text-[clamp(28px,3.5vw,42px)] font-semibold leading-[1.15] tracking-tight text-ink'>
              33 five-star reviews on Upwork.
            </h2>
            <p className='text-[13px] text-gray-400'>Scroll or hover to pause</p>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className='reveal mt-12 flex gap-4 overflow-x-auto px-6 scrollbar-hide'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.project}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}
