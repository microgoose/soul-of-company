import {getAIHistory} from "@/entities/ai";
import {AiApi} from "@/shared/types/entities";
import {useQuery} from "@tanstack/react-query";
import {t} from "i18next";

export const useAiApiHistory = (aiApi?: AiApi) => {
    const { data: aiHistory = [], isLoading } = useQuery({
        queryKey: ['activeAiHistory', aiApi?.id],
        queryFn: () => {
            if (!aiApi) throw new Error(t('errors.AiApi.activeAiApiNotFound'));
            return getAIHistory(aiApi.id);
        },
        initialData: [],
        enabled: !!aiApi,
    });

    return { aiHistory, isLoading };
};
