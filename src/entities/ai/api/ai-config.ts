import {api} from "@/app/api.ts";
import {AIConfig} from "@/shared/types/entities";
import {t} from "i18next";

export const getAIConfig = async (aiApiId: number): Promise<AIConfig> => {
    const configs = await api.get<AIConfig[]>('db/ai-config.json').json();
    const config = configs.find(item => item.aiApi.id === aiApiId);
    if (config) return config;
    throw new Error(t('errors.AIConfig.aiApiNotFound'));
}