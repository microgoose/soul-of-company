import {TemperatureMessage} from "@/shared/types/entities";
import {api} from "@/app/api.ts";

export const getTemperatureMessages = (): Promise<TemperatureMessage[]> => {
    return api.get<TemperatureMessage[]>('db/temperature-message.json').json();
}