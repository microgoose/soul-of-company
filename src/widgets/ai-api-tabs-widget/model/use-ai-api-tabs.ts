import {getAiApis, getAIConfig, getAIHistory} from "@/entities/ai";
import {AiApi} from "@/shared/types/entities/ai-api.types.ts";
import {useTabs} from "@/shared/ui/tabs/model/use-tabs.ts";
import {useQuery} from "@tanstack/react-query";
import {t} from "i18next";
import {useEffect, useMemo, useState} from "react";

export const useAaiApiTabs = () => {
    const tabs = useTabs();
    const [activeAiApi, setActiveAiApi] = useState<AiApi | undefined>(undefined);

    const {data: aiApis = [], isLoading: aiApisIsLoading} = useQuery({
        queryKey: ['aiApis'],
        queryFn: getAiApis
    });

    const {data: aiConfig, isLoading: aiConfigIsLoading} = useQuery({
        queryKey: ['activeAiConfig', activeAiApi?.id],
        queryFn: () => {
            if (!activeAiApi) throw new Error(t('errors.AiApi.activeAiApiNotFound'));
            return getAIConfig(activeAiApi.id);
        },
        enabled: !!activeAiApi
    });

    const {data: aiHistory = [], isLoading: aiHistoryIsLoading} = useQuery({
        queryKey: ['activeAiHistory', activeAiApi?.id],
        queryFn: () => {
            if (!activeAiApi) throw new Error(t('errors.AiApi.activeAiApiNotFound'));
            return getAIHistory(activeAiApi.id);
        },
        enabled: !!activeAiApi
    });
    
    const isLoading = useMemo(() => (
        aiApisIsLoading || aiConfigIsLoading || aiHistoryIsLoading
    ), [aiApisIsLoading, aiConfigIsLoading, aiHistoryIsLoading]);

    useEffect(() => {
        if (aiApis.length) {
            setActiveAiApi(aiApis.find((aiConfig) => aiConfig.isActive));
            tabs.replaceTabs(aiApis);
        } else {
            setActiveAiApi(undefined);
        }
    }, [aiApis]);

    useEffect(() => {
        if (activeAiApi && tabs.tabs.length) {
            tabs.activateTab(activeAiApi.id);
        }
    }, [activeAiApi, tabs.tabs.length]);

    useEffect(() => {
        const activeTab = tabs.activeTab;
        if (activeTab) {
            const foundApi = aiApis.find((aiConfig) => activeTab.id === aiConfig.id);
            if (foundApi) setActiveAiApi(foundApi);
        }
    }, [aiApis, tabs.activeTab]);

    return {tabs, aiConfig, aiHistory, isLoading};
};
