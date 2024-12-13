import {api} from '@/app/api'
import {City, Role, User} from "@/shared/types/entities";

interface GetAllUsersData {
    id: number,
    roles: Role[]
    cities: City[]
    telegramId: string
    login: string
    fio: string
    phone: string
    birthday: string
    hiringDate: string,
    blocked: boolean,
}

export const getAllUsers = (): Promise<User[]> => {
    return api.get<GetAllUsersData[]>('db/users.json').json().then((users => users.map(user => ({
        ...user,
        birthday: new Date(user.birthday),
        hiringDate: new Date(user.hiringDate)
    }))));
}