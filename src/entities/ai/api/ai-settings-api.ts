import {api} from "@/app/api.ts";
import {AiApi} from "@/shared/types/entities/ai-api.types.ts";

export const getAiApis = (): Promise<AiApi[]> => {
    return api.get<AiApi[]>('db/ai-apis.json').json();
}