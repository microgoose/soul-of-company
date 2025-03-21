import {useAiApiConfig, useAiApiHistory, useAiApis} from "@/entities/ai";
import {useAiApiTabsLogic} from "@/widgets/ai-api-tabs-widget/model/use-ai-api-tabs-logic.ts";
import {useMemo} from "react";

export const useAiApiTabs = () => {
    const { aiApis, isLoading: aiApisIsLoading } = useAiApis();
    const { tabs, activeAiApi, selectedAiApi } = useAiApiTabsLogic(aiApis);
    const { aiConfig, isLoading: aiConfigIsLoading } = useAiApiConfig(selectedAiApi);
    const { aiHistory, isLoading: aiHistoryIsLoading } = useAiApiHistory(selectedAiApi);

    const isLoading = useMemo(
        () => aiApisIsLoading || aiConfigIsLoading || aiHistoryIsLoading,
        [aiApisIsLoading, aiConfigIsLoading, aiHistoryIsLoading]
    );

    return { tabs, activeAiApi, selectedAiApi, aiConfig, aiHistory, isLoading };
};