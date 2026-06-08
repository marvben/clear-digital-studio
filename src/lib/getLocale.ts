import { COUNTRIES } from '@/data/locales';
import Cookies from 'js-cookie';

export const getLocale = () => {
  let code = '';
  if (typeof window === 'undefined') {
    const { cookies } = require('next/headers');
    code = cookies().get('country')?.value ?? 'US';
  } else {
    code = Cookies.get('country') ?? 'US';
  }

  const countryData = COUNTRIES.find((c) => c.countryCode === code);

  return countryData || COUNTRIES[0];
};
