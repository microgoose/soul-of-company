import {getMailingTimeConfig} from "@/entities/mailing";
import {MailingTimeConfig} from "@/shared/types/entities";
import {useState} from "react";

export interface UseMailingTimeController {
    mailingTime: MailingTimeConfig | null,
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    update: (mailingTime: MailingTimeConfig) => void;
}

export const useMailingTimeController = (): UseMailingTimeController => {
    const [mailingTime, setMailingTimeConfig] = useState<MailingTimeConfig | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const load = () => {
        setIsLoading(true);
        setError(null);

        getMailingTimeConfig()
            .then(setMailingTimeConfig)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const update = (mailingTime: MailingTimeConfig) => {
        setMailingTimeConfig(mailingTime);
    }

    return { mailingTime, isLoading, error, load, update };
}