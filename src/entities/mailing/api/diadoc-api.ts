import {DiadocApiConfig,} from "@/shared/types/entities";
import {api} from "@/app/api.ts";

export const getDiadicApiConfig = (): Promise<DiadocApiConfig> => {
    return api.get<DiadocApiConfig[]>('db/diadoc-api-config.json').json();
}