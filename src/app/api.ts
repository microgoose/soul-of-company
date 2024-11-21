import ky from 'ky';
import {BASE_API_URL} from '@/shared/config/api-config.ts';

export const api = ky.create({
  prefixUrl: BASE_API_URL,
});
