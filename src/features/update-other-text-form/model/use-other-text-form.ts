import {OtherTexts} from "@/shared/types/entities";
import {useCallback, useEffect, useState} from "react";
import {t} from "i18next";

export interface UseOtherTextForm {
    values: OtherTexts,
    errors: Partial<Record<keyof OtherTexts, Error>>,
    onChange: (name: keyof OtherTexts, value: string) => void,
    reset: () => void,
}

export const useOtherTextForm = (otherTexts: OtherTexts): UseOtherTextForm => {
    const [values, setValues] = useState<OtherTexts>(otherTexts);
    const [errors, setErrors] = useState<Partial<Record<keyof OtherTexts, Error>>>({});

    const onChange = useCallback((name: keyof OtherTexts, value: string) => {
        if (!value) {
            setErrors({
                ...errors,
                [name]: new Error(t('validation.fieldMustBeFilled'))
            });
        }

        setValues({
            ...values,
            [name]: value,
        });
    }, [errors, values]);

    const reset = useCallback(() => {
        setErrors({});
        setValues(otherTexts);
    }, [otherTexts]);

    useEffect(() => {
        setValues(otherTexts)
    }, [otherTexts]);
    
    return { values, errors, reset, onChange };
}