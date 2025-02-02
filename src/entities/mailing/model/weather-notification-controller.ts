import {getConferenceTime} from "@/entities/mailing";
import {ConferenceTime} from "@/shared/types/entities";
import {useState} from "react";

export interface UseConferenceTimeController {
    config: ConferenceTime | null
    isLoading: boolean;
    error: Error | null;
    load: () => void;
}

export const useConferenceTimeController = (): UseConferenceTimeController => {
    const [config, setConfig] = useState<ConferenceTime | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const load = () => {
        setIsLoading(true);
        setError(null);

        getConferenceTime()
            .then(setConfig)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    return { config, isLoading, error, load };
}