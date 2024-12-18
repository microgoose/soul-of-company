import {Role} from "@/shared/types/entities/role.types.ts";

export interface ChainLink {
    id: number | null,
    role: Role,
    text: string
}

export interface OtherTexts {
    afterAccountCreatedText: string,
    mainMenuText: string,
    afterAccountSentText: string,
}