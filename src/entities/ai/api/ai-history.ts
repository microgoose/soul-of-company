import {AIHistory} from "@/shared/types/entities";
import {api} from "@/app/api.ts";

export const getAIHistory = async (aiApiId: number): Promise<AIHistory[]> => {
    const historyList = await api.get<AIHistory[]>('db/ai-history.json').json();

    return historyList.filter(item => item.aiApi.id === aiApiId).map(item => ({
        ...item,
        time: new Date(item.time)
    }));
}