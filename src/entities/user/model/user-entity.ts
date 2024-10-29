export interface User {
    id: number
    roles: string[]
    cities: string[]
    telegramId: string
    login: string
    fio: string
    phone: string
    birthday: Date
    hiringDate: Date
}
export type UsersList = User[]