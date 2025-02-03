import {CopyIcon} from "@/shared/assets";
import {ButtonSize, ButtonType, IconButton} from "@/shared/ui/button";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";
import {useCopyText} from "@/shared/ui/copy-text/model/use-copy-text.ts";
import classNames from "classnames";
import style from './CopyText.module.scss';

interface CopyTextProps {
    text: string,
    disabled?: boolean,
}

export const CopyText = ({text, disabled}: CopyTextProps) => {
    const {tooltipText, resetTooltipText, copyText} = useCopyText(text);

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