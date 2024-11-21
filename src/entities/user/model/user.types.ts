import {RoleList} from "@/entities/role";
import {CityList} from "@/entities/city";

export interface User {
    id: number | null,
    roles: RoleList
    cities: CityList
    telegramId: string
    login: string
    fio: string
    phone: string
    birthday: Date
    hiringDate: Date,
    blocked: boolean | null,
}
export type UsersList = User[]