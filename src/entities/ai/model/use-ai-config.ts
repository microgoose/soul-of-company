import {getAiConfig, saveAiConfig, useAiApis} from "@/entities/ai";
import {AiApi} from "@/shared/types/entities";
import {useMutation, useQuery} from "@tanstack/react-query";
import {t} from "i18next";

export const useAiApiConfig = (aiApi?: AiApi) => {
    const { data: aiConfig, isLoading } = useQuery({
        queryKey: ['activeAiConfig', aiApi?.id],
        queryFn: () => {
            if (!aiApi) throw new Error(t('errors.AiApi.activeAiApiNotFound'));
            return getAiConfig(aiApi.id);
        },
        enabled: !!aiApi,
    });

    return { aiConfig, isLoading };
};

export const useSaveAiConfig = () => {
    const aiApis = useAiApis();

    const saveMutation = useMutation({
        mutationFn: saveAiConfig,
        onSuccess: () => aiApis.refetch()
    });

    return {
        save: saveMutation.mutateAsync,
        isLoading: saveMutation.isPending,
    };
};