import { COUNTRIES } from '@/data/locales';
import Cookies from 'js-cookie';

export const getLocale = async () => {
  let code = '';
  if (typeof window === 'undefined') {
    const { cookies } = require('next/headers');
    const cookieStore = await cookies();
    const code = cookieStore.get('country')?.value ?? 'US';
  } else {
    code = Cookies.get('country') ?? 'US';
  }

  const countryData = COUNTRIES.find((c) => c.countryCode === code);

  return countryData || COUNTRIES[0];
};
