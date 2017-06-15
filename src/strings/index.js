import { getDeviceLocale } from 'react-native-device-info';
import en from './en';

const translations = {
  'en-gb': en,
};

const deviceLocale = getDeviceLocale();
const translationsForLocale = translations[deviceLocale.toLowerCase()] || translations['en-gb'];

export default translationsForLocale;