import {t} from "i18next";
import {useCallback, useState} from "react";

export const useCopyText = (text: string) => {
    const [tooltipText, setTooltipText] = useState(t('actions.copy'));

    const copyText = useCallback(() => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setTooltipText(t('actions.copied'));
            });
    }, [text]);

    const resetTooltipText = useCallback(() => {
        setTooltipText(t('actions.copy'));
    }, []);

    return {tooltipText, copyText, resetTooltipText};
}