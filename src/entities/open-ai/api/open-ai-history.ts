import {OpenAiHistory} from "@/shared/types/entities";
import {api} from "@/app/api.ts";

export const getOpenAIHistory = (): Promise<OpenAiHistory[]> => {
    return api.get<OpenAiHistory[]>('db/open-ai-history.json').json().then(list => list.map(item => ({
        ...item,
        time: new Date(item.time)
    })));
}