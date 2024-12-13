import {Organization} from "@/shared/types/entities/organization.types.ts";
import {City} from "@/shared/types/entities/city.types.ts";
import {Person} from "@/shared/types/entities/person.types.ts";
import {File} from './file.types.ts';

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
    status: AccountStatus,
    statusComment: string | null,
    comment: string | null,
}

export interface AccountStatus {
    id: null | number,
    code: AccountStatusCode,
    name: string,
}

export enum AccountStatusCode {
    COMPLETED = 'COMPLETED',
    IN_PROGRESS = 'IN_PROGRESS',
    DENIED = 'DENIED',
    EXPIRED = 'EXPIRED',
    CANCELLED = 'CANCELLED'
}
