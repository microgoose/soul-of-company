import {Person, Reminder, ReminderType, SendingStatus} from "@/shared/types/entities";
import {api} from "@/app/api.ts";

export interface GetAllRemindersList {
    id: number,
    number: number,
    author: Person,
    text: string,
    type: ReminderType,
    createdAt: string,
    assignedAt: string,
    readAt: string | null,
    executor: Person,
    sendingStatus: SendingStatus,
}

export const getAllReminders = async (): Promise<Reminder[]> => {
    const reminders = await api.get<GetAllRemindersList[]>('db/reminders.json').json();
    return reminders.map(reminder => ({
        ...reminder,
        createdAt: new Date(reminder.createdAt),
        assignedAt: new Date(reminder.assignedAt),
        readAt: reminder.readAt? new Date(reminder.readAt) : null,
    }));
}