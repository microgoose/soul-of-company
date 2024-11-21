import {api} from '@/app/api'
import {CityList} from "@/entities/city/model/city-entity.ts";
import {RoleList} from "@/entities/role/model/role-entity.ts";

export const getAllCities = (): Promise<CityList> => {
  return api.get<CityList>('cities.json').json();
}

export const getCitiesByIds = async (ids: number[]): Promise<RoleList> => {
  const cities = await getAllCities();
  return cities.filter(city => ids.includes(city.id));
}

export const getCitiesByNames = async (names: string[]): Promise<RoleList> => {
  const cities = await getAllCities();
  return cities.filter(city => names.includes(city.name));
}