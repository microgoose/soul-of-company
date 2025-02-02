import {api} from "@/app/api.ts";
import {TimeZone} from "@/shared/types/entities";

export const getAllTimeZones = (): Promise<TimeZone[]> => {
    return api.get<TimeZone[]>('db/time-zones.json').json();
}

export const getTimeZoneById = (id: number): Promise<TimeZone | undefined> => {
    return api.get<TimeZone[]>('db/time-zones.json').json()
        .then(timeZones => timeZones.filter(item => item.id === id))
        .then(([timeZone]) => timeZone)
}