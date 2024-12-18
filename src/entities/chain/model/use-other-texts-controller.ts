import {useState} from "react";
import {getOtherTexts} from "@/entities/chain/api/other-texts-api.ts";
import {OtherTexts} from "@/shared/types/entities";

export interface UseOtherTextsController {
    otherTexts: OtherTexts;
    isLoading: boolean;
    error: Error | null;
    load: () => void;
    update: (texts: OtherTexts) => void;
}

export const useOtherTextsController = (): UseOtherTextsController => {
    const [otherTexts, setOtherTexts] = useState<OtherTexts>({
        afterAccountCreatedText: '',
        afterAccountSentText: '',
        mainMenuText: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const load = () => {
        setIsLoading(true);
        setError(null);

        getOtherTexts()
            .then(setOtherTexts)
            .catch(setError)
            .finally(() => setIsLoading(false));
    };

    const update = (entity: OtherTexts) => {
        setOtherTexts(entity);
    };

    return { otherTexts, isLoading, error, load, update };
}