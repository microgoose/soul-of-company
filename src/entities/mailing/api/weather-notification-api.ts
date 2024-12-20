import {ConferenceTime} from "@/shared/types/entities";
import {api} from "@/app/api.ts";

export const getConferenceTime = (): Promise<ConferenceTime> => {
    return api.get<ConferenceTime>('db/conference-time.json').json();
}