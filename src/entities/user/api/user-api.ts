import {api} from '@/app/api'
import {User} from "@/shared/types/entities";

export const getAllUsers = (): Promise<User[]> => {
    return api.get<User[]>('db/users.json').json().then((users => users.map(user => ({
        ...user,
        birthday: new Date(user.birthday),
        hiringDate: new Date(user.hiringDate)
    }))));
}