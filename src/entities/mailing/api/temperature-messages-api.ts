import {api} from "@/app/api.ts";
import {TemperatureMessage} from "@/shared/types/entities";

export const getTemperatureMessages = (): Promise<TemperatureMessage[]> => {
    return api.get<TemperatureMessage[]>('db/temperature-message.json').json();
}