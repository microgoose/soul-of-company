import {api} from "@/app/api.ts";
import {MailingTimeConfig} from "@/shared/types/entities";

export const getMailingTimeConfig = (): Promise<MailingTimeConfig> => {
    return api.get<MailingTimeConfig[]>('db/mailing-time-config.json').json();
}