import {getAIHistory} from "@/entities/ai";
import {AiApi} from "@/shared/types/entities";
import {useQuery} from "@tanstack/react-query";
import {t} from "i18next";

export const useAiHistory = (selectedAiApiTab?: AiApi) => {
    const { data: aiHistory = [], isLoading } = useQuery({
        queryKey: ['activeAiHistory', selectedAiApiTab?.id],
        queryFn: () => {
            if (!selectedAiApiTab) throw new Error(t('errors.AiApi.activeAiApiNotFound'));
            return getAIHistory(selectedAiApiTab.id);
        },
        initialData: [],
        enabled: !!selectedAiApiTab,
    });

    return { aiHistory, isLoading };
};
