import {TimeZone} from "@/shared/types/entities/time-zone.types.ts";

export type MailingTime = string;
export interface MailingTimeConfig {
    timeZone: TimeZone,
    startTime: MailingTime,
    endTime: MailingTime,
}