import {Organization} from "@/shared/types/entities/organization.types.ts";
import {City} from "@/shared/types/entities/city.types.ts";
import {Person} from "@/shared/types/entities/person.types.ts";

export interface Account {
    id: null | number,
    number: number,
    date: Date,
    counterparty: Organization,
    city: City,
    amount: number,
    justification: string,
    files: File[],
    creator: Person,
    state: AccountState,
    comment: string | null,
}

export interface AccountState {
    id: null | number,
    name: string,
}