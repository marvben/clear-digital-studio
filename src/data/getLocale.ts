import { COUNTRIES } from '@/data/locales';
import Cookies from 'js-cookie';

export const getLocale = () => {
  const code = Cookies.get('country');
  return COUNTRIES.find((c) => c.countryCode === code) || COUNTRIES[0];
};
