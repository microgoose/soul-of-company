import {AiApi} from "@/shared/types/entities/ai-api.types.ts";
import {Person} from "@/shared/types/entities/person.types.ts";

export interface AIConfig {
    aiApi: AiApi,
    apiKey: string,
    model: string,
    tokens: number,
}

export interface AIHistory {
    id: number,
    aiApi: AiApi,
    user: Person,
    time: Date,
    request: string,
    response: string,
}