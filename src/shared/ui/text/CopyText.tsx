import style from './CopyText.module.scss';
import {CopyIcon} from "@/shared/assets";
import {ButtonSize, ButtonType, IconButton} from "@/shared/ui/button";
import {t} from "i18next";
import {useCallback, useState} from "react";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";

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
        <div className={style.copyText}>
            <span>{text}</span>
            <IconButton
                type={ButtonType.EMPTY}
                size={ButtonSize.SMALL}
                radius={ButtonRadius.SMALL}
                tooltip={tooltipText}
                onClick={copyText}
                onHover={resetTooltipText}
            >
                <CopyIcon/>
            </IconButton>
        </div>
    );
};