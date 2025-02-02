import {api} from "@/app/api.ts";
import {DiadocApiConfig,} from "@/shared/types/entities";

export const getDiadicApiConfig = (): Promise<DiadocApiConfig> => {
    return api.get<DiadocApiConfig[]>('db/diadoc-api-config.json').json();
}