import {api} from "@/app/api.ts";
import {AIConfig, NewAIConfig} from "@/shared/types/entities";
import {t} from "i18next";

export const getAiConfig = async (aiApiId: number): Promise<AIConfig> => {
    const configs = await api.get<AIConfig[]>('db/ai-config.json').json();
    const config = configs.find(item => item.aiApi.id === aiApiId);
    if (config) return config;
    throw new Error(t('errors.AIConfig.aiApiNotFound'));
}

export const saveAiConfig = async (aiConfig: NewAIConfig) => {
    console.log("saving aiConfig", aiConfig);
};