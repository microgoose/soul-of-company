export type AiType = {
    id: number,
    code: string,
}

export type AiApi = {
    id: number;
    type: AiType
    label: string,
    isActive: boolean,
}