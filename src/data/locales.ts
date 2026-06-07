export interface CountryData {
  name: string;
  countryCode: string;
  currency: string;
  currencySymbol: string;
  address: string;
  companyType: string;
  phone: string;
  priceRate: number;
  formatMoney?: (amount: number) => string;
}

export const COUNTRIES: CountryData[] = [
  {
    name: 'Nigeria',
    countryCode: 'NG',
    currency: 'NGN',
    currencySymbol: '₦',
    address: 'Lagos',
    companyType: 'Ltd',
    phone: '+234 707 159 1579',
    priceRate: 300,
    formatMoney: (amount) => `₦${amount.toLocaleString()}`,
  },
  {
    name: 'United States',
    countryCode: 'US',
    currency: 'USD',
    currencySymbol: '$',
    address: 'Wyoming, Delaware, Nevada',
    companyType: 'LLC',
    phone: '+1 555 123 4567',
    priceRate: 1,
    formatMoney: (amount) => `$${amount.toLocaleString()}`,
  },
  {
    name: 'United Kingdom',
    countryCode: 'GB',
    currency: 'GBP',
    currencySymbol: '£',
    address: 'Manchester',
    companyType: 'Ltd',
    phone: '+44 161 123 4567',
    priceRate: 0.75,
    formatMoney: (amount) => `£${amount.toLocaleString()}`,
  },
];
