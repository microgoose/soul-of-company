import {getDiadicApiConfig} from "@/entities/mailing";
import {DiadocApiConfig} from "@/shared/types/entities";
import {useState} from "react";

export interface UseDiadocApiFieldsController {
    diadocApiConfig: DiadocApiConfig | null
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    update: (diadocApiConfig: DiadocApiConfig) => void;
}

export const useDiadocApiFieldsController = (): UseDiadocApiFieldsController => {
    const [diadocApiConfig, setDiadocApiConfig] = useState<DiadocApiConfig | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const load = () => {
        setIsLoading(true);
        setError(null);

        getDiadicApiConfig()
            .then(setDiadocApiConfig)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const update = (diadocApiConfig: DiadocApiConfig) => {
        setDiadocApiConfig(diadocApiConfig);
    }

    return { diadocApiConfig, isLoading, error, load, update };
}