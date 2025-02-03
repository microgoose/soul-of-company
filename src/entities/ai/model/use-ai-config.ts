import {getAIConfig} from "@/entities/ai";
import {AiApi} from "@/shared/types/entities";
import {useQuery} from "@tanstack/react-query";
import {t} from "i18next";

export const useAiConfig = (selectedAiApiTab?: AiApi) => {
    const { data: aiConfig, isLoading } = useQuery({
        queryKey: ['activeAiConfig', selectedAiApiTab?.id],
        queryFn: () => {
            if (!selectedAiApiTab) throw new Error(t('errors.AiApi.activeAiApiNotFound'));
            return getAIConfig(selectedAiApiTab.id);
        },
        enabled: !!selectedAiApiTab,
    });

    return { aiConfig, isLoading };
};