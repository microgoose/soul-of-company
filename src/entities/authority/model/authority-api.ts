import {api} from "@/app/api.ts";
import {Authority} from "@/shared/types/entities";

export const getAllAuthorities = (): Promise<Authority[]> => {
    return api.get<Authority[]>('db/authorities.json').json();
}

export const getAuthoritiesByIds = async (ids: number[]): Promise<Authority[]> => {
    const authorities = await getAllAuthorities();
    return authorities.filter(item => ids.includes(item.id));
}

export const getAuthoritiesByNames = async (names: string[]): Promise<Authority[]> => {
    const authorities = await getAllAuthorities();
    return authorities.filter(item => names.includes(item.name));
}