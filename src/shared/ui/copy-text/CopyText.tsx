import style from './CopyText.module.scss';
import {CopyIcon} from "@/shared/assets";
import {ButtonSize, ButtonType, IconButton} from "@/shared/ui/button";
import {t} from "i18next";
import {useCallback, useState} from "react";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";
import classNames from "classnames";

interface CopyTextProps {
    text: string,
    disabled?: boolean,
}

export const CopyText = ({text, disabled}: CopyTextProps) => {
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
        <div className={classNames(style.copyText, {[style.disabled]: disabled})}>
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