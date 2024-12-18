import {Person} from "@/shared/types/entities/person.types.ts";

export interface Reminder {
    id: number,
    number: number,
    author: Person,
    text: string,
    type: ReminderType,
    createdAt: Date,
    assignedAt: Date,
    readAt: Date | null,
    executor: Person,
    sendingStatus: SendingStatus,
}

export interface ReminderType {
    id: number,
    code: ReminderTypeCode,
    name: string,
}

export enum ReminderTypeCode {
    ONE_TIME = 'ONE_TIME',
}

export interface SendingStatus {
    id: number,
    code: SendingStatusCode,
    name: string,
}

export enum SendingStatusCode {
    READ_IT = 'READ_IT',
    SENT = 'SENT',
    STOPPED = 'STOPPED',
    IN_QUEUE = 'IN_QUEUE',
}