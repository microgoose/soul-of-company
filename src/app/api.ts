import {BASE_API_URL} from '@/shared/config/api-config.ts';
import ky from 'ky';

export const api = ky.create({
  prefixUrl: BASE_API_URL,
});