import {api} from "@/app/api.ts";
import {AIHistory} from "@/shared/types/entities";

export const getAIHistory = async (aiApiId: number): Promise<AIHistory[]> => {
    const historyList = await api.get<AIHistory[]>('db/ai-history.json').json();

    return historyList.filter(item => item.aiApi.id === aiApiId).map(item => ({
        ...item,
        time: new Date(item.time)
    }));
}