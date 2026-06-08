'use client';

import Cookies from 'js-cookie';
import { COUNTRIES } from '@/data/locales';

export function getClientLocale() {
  const code = Cookies.get('country') ?? 'US';

  return COUNTRIES.find((c) => c.countryCode === code) ?? COUNTRIES[0];
}
