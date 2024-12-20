import {TemperatureMessage} from "@/shared/types/entities";
import {useState} from "react";
import {getTemperatureMessages} from "@/entities/mailing";

export interface UseTemperatureMessagesController {
    messages: TemperatureMessage[]
    isLoading: boolean;
    error: Error | null;
    load: () => void;
}

export const useTemperatureMessagesController = (): UseTemperatureMessagesController => {
    const [messages, setMessages] = useState<TemperatureMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const load = () => {
        setIsLoading(true);
        setError(null);

        getTemperatureMessages()
            .then(setMessages)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    return { messages, isLoading, error, load };
}