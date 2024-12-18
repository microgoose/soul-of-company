import {useState} from "react";
import {Reminder} from "@/shared/types/entities";
import {getAllReminders} from "@/entities/reminder/api/reminder-api.ts";

export interface UseRemindersController {
    reminders: Reminder[];
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    remove: (roleAuthorities: Reminder) => void;
}

export const useRemindersController = (): UseRemindersController => {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const load = () => {
        setIsLoading(true);
        setError(null);

        getAllReminders()
            .then(setReminders)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const remove = (entity: Reminder) => {
        setReminders(list => list.filter(item => item.id !== entity.id));
    }

    return {reminders, isLoading, error, load, remove};
}