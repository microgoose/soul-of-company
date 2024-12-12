import {api} from '@/app/api'
import {City} from "@/shared/types/entities";

export const getAllCities = (): Promise<City[]> => {
    return api.get<City[]>('db/cities.json').json();
}

export const getCitiesByIds = async (ids: number[]): Promise<City[]> => {
    const cities = await getAllCities();
    return cities.filter(city => ids.includes(city.id));
}

export const getCitiesByNames = async (names: string[]): Promise<City[]> => {
    const cities = await getAllCities();
    return cities.filter(city => names.includes(city.name));
}