import { api } from '@/app/api'

export interface User {
  id: number
  roles: string[]
  cities: string[]
  telegramId: string
  login: string
  fio: string
  phone: string
  birthday: string
  hiringDate: string
}
export type UsersList = User[]

export const getAllUsers = (): Promise<UsersList> => {
  return api.get<UsersList>('users').json()
}
