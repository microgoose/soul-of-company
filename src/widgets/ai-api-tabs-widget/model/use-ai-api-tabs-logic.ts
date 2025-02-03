import {AiApi} from "@/shared/types/entities";
import {useTabs} from "@/shared/ui/tabs";
import {useEffect, useState} from "react";

export const useAiApiTabsLogic = (aiApis: AiApi[]) => {
    const tabs = useTabs();
    const [selectedAiApi, setSelectedAiApi] = useState<AiApi | undefined>();
    const [activeAiApi, setActiveAiApi] = useState<AiApi | undefined>();

    useEffect(() => {
        if (aiApis.length) {
            tabs.replaceTabs(aiApis);
            const active = aiApis.find((api) => api.isActive);
            setActiveAiApi(active);
            setSelectedAiApi(active);
        } else {
            setActiveAiApi(undefined);
            setSelectedAiApi(undefined);
        }
    }, [aiApis]);

    useEffect(() => {
        if (selectedAiApi && tabs.tabs.length) {
            tabs.activateTab(selectedAiApi.id);
        }
    }, [selectedAiApi, tabs.tabs.length]);

    useEffect(() => {
        const activeTab = tabs.activeTab;
        if (activeTab) {
            const foundApi = aiApis.find((api) => activeTab.id === api.id);
            if (foundApi) setSelectedAiApi(foundApi);
        }
    }, [aiApis, tabs.activeTab]);

    return { tabs, activeAiApi, selectedAiApi, setSelectedAiApi };
};