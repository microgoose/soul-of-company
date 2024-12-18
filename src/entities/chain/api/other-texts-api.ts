import {api} from "@/app/api.ts";
import {OtherTexts} from "@/shared/types/entities";

export const getOtherTexts = (): Promise<OtherTexts> => {
    return api.get<OtherTexts>('db/other-texts.json').json();
}