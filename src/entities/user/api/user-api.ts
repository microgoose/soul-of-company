import {api} from '@/app/api'
import type {UsersList} from "@/entities/user";

export const getAllUsers = (): Promise<UsersList> => {
    return api.get<UsersList>('users.json').json().then((usersList => usersList.map(user => ({
        ...user,
        birthday: new Date(user.birthday),
        hiringDate: new Date(user.hiringDate)
    }))));
}