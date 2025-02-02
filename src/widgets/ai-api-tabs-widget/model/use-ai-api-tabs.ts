import {getAiApis, getAIConfig, getAIHistory} from "@/entities/ai";
import {AiApi} from "@/shared/types/entities/ai-api.types.ts";
import {useTabs} from "@/shared/ui/tabs/model/use-tabs.ts";
import {useQuery} from "@tanstack/react-query";
import {t} from "i18next";
import {useEffect, useMemo, useState} from "react";

export const useAaiApiTabs = () => {
    const tabs = useTabs();
    const [selectedAiApiTab, setSelectedAiApiTab] = useState<AiApi | undefined>(undefined);
    const [activeAiApi, setActiveAiApi] = useState<AiApi | undefined>(undefined);

    const {data: aiApis = [], isLoading: aiApisIsLoading} = useQuery({
        queryKey: ['aiApis'],
        queryFn: getAiApis
    });

    const {data: aiConfig, isLoading: aiConfigIsLoading} = useQuery({
        queryKey: ['activeAiConfig', selectedAiApiTab?.id],
        queryFn: () => {
            if (!selectedAiApiTab) throw new Error(t('errors.AiApi.activeAiApiNotFound'));
            return getAIConfig(selectedAiApiTab.id);
        },
        enabled: !!selectedAiApiTab
    });

    const {data: aiHistory = [], isLoading: aiHistoryIsLoading} = useQuery({
        queryKey: ['activeAiHistory', selectedAiApiTab?.id],
        queryFn: () => {
            if (!selectedAiApiTab) throw new Error(t('errors.AiApi.activeAiApiNotFound'));
            return getAIHistory(selectedAiApiTab.id);
        },
        enabled: !!selectedAiApiTab
    });
    
    const isLoading = useMemo(() => (
        aiApisIsLoading || aiConfigIsLoading || aiHistoryIsLoading
    ), [aiApisIsLoading, aiConfigIsLoading, aiHistoryIsLoading]);

    useEffect(() => {
        if (aiApis.length) {
            tabs.replaceTabs(aiApis);
            const active = aiApis.find((aiConfig) => aiConfig.isActive);
            setActiveAiApi(active);
            setSelectedAiApiTab(active);
        } else {
            setActiveAiApi(undefined);
            setSelectedAiApiTab(undefined);
        }
    }, [aiApis]);

    useEffect(() => {
        if (selectedAiApiTab && tabs.tabs.length) {
            tabs.activateTab(selectedAiApiTab.id);
        }
    }, [selectedAiApiTab, tabs.tabs.length]);

    useEffect(() => {
        const activeTab = tabs.activeTab;
        if (activeTab) {
            const foundApi = aiApis.find((aiConfig) => activeTab.id === aiConfig.id);
            if (foundApi) setSelectedAiApiTab(foundApi);
        }
    }, [aiApis, tabs.activeTab]);

    return {tabs, activeAiApi, aiConfig, aiHistory, isLoading};
};
