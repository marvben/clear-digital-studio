import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className='border-t border-gray-100 bg-white'>
      <div className='mx-auto max-w-6xl px-6 py-12'>
        <div className='flex flex-col justify-between gap-10 md:flex-row md:items-start'>
          <div>
            <Link href='/'>
              <Image src='/images/logo.png' alt='Clear Digital Studio' width={160} height={40} className='h-7 w-auto' />
            </Link>
            <p className='mt-2 max-w-xs text-[13px] leading-relaxed text-gray-500'>Web design and growth for local service businesses. Edmonton-based, working across Canada and the US.</p>
          </div>

          <div className='flex flex-wrap gap-x-14 gap-y-6'>
            <div>
              <p className='text-[11px] font-semibold uppercase tracking-widest text-gray-500'>Pages</p>
              <div className='mt-3 flex flex-col gap-2'>
                {[
                  { label: 'Services', href: '/services' },
                  { label: 'Work', href: '/portfolio' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className='text-[13px] text-gray-400 transition-colors hover:text-ink'>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className='text-[11px] font-semibold uppercase tracking-widest text-gray-500'>Contact</p>
              <div className='mt-3 flex flex-col gap-2 text-[13px] text-gray-400'>
                <a href='mailto:hello@cleardigitalstudio.ca' className='transition-colors hover:text-ink'>
                  hello@cleardigitalstudio.com
                </a>
                <span>Edmonton, AB</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-50 pt-6 text-[12px] text-gray-500 sm:flex-row'>
          <p>&copy; {new Date().getFullYear()} Clear Digital Studio</p>
          <div className='flex gap-5'>
            <Link href='/privacy' className='hover:text-gray-500'>
              Privacy
            </Link>
            <Link href='/terms' className='hover:text-gray-500'>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
