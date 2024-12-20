import {MailingTimeConfig} from "@/shared/types/entities";
import {api} from "@/app/api.ts";

export const getMailingTimeConfig = (): Promise<MailingTimeConfig> => {
    return api.get<MailingTimeConfig[]>('db/mailing-time-config.json').json();
}