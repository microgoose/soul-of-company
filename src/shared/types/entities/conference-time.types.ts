import {MailingTime} from "@/shared/types/entities/mailing-time.types.ts";

export interface ConferenceTime {
    conferenceID: string,
    sendingTime: MailingTime,
}