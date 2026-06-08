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

  return COUNTRIES.find((c) => c.countryCode === code) || COUNTRIES[0];
};
