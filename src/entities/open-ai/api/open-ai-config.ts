import {OpenAiConfig} from "@/shared/types/entities";
import {api} from "@/app/api.ts";

export const getOpenAIConfig = (): Promise<OpenAiConfig> => {
    return api.get<OpenAiConfig>('db/open-ai-config.json').json();
}