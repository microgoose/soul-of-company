import {AiApi} from "@/shared/types/entities/ai-api.types.ts";

export interface AIConfig {
    aiApi: AiApi,
    apiKey: string,
    model: string,
    tokens: number,
}

export interface NewAIConfig {
    apiKey: string,
    model: string,
    tokens: number,
}