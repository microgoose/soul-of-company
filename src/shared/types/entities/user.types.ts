import {Role} from "@/shared/types/entities/role.types.ts";
import {City} from "@/shared/types/entities/city.types.ts";

export interface User {
    id: number | null,
    roles: Role[]
    cities: City[]
    telegramId: string
    login: string
    fio: string
    phone: string
    birthday: Date
    hiringDate: Date,
    blocked: boolean | null,
}