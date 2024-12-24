import {Person} from "@/shared/types/entities/person.types.ts";

export interface OpenAiConfig {
    apiKey: string,
    model: string,
    tokens: number,
}

export interface OpenAiHistory {
    id: number,
    user: Person,
    time: Date,
    request: string,
    response: string,
}