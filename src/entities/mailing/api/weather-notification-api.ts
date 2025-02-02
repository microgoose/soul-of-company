import {api} from "@/app/api.ts";
import {ConferenceTime} from "@/shared/types/entities";

export const getConferenceTime = (): Promise<ConferenceTime> => {
    return api.get<ConferenceTime>('db/conference-time.json').json();
}