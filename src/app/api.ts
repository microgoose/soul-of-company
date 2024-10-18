import ky from 'ky'
import { BASE_API_URL } from '@/app/config'

export const api = ky.create({
  prefixUrl: BASE_API_URL,
})
