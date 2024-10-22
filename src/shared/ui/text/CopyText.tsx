import style from './CopyText.module.scss';
import {CopyIcon} from "@/shared/assets";
import {ButtonSize, ButtonType, IconButton} from "@/shared/ui/button";
import {t} from "i18next";
import {useCallback, useState} from "react";

export const CopyText = ({text}: { text: string }) => {
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

    return (
        <span className={style.copyText}>
            {text}
            <IconButton
                type={ButtonType.EMPTY}
                size={ButtonSize.SMALL}
                tooltip={tooltipText}
                onClick={copyText}
                onHover={resetTooltipText}
            >
                <CopyIcon/>
            </IconButton>
        </span>
    );
};