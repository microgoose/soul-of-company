import {CopyIcon} from "@/shared/assets";
import {ButtonSize, ButtonType, IconButton} from "@/shared/ui/button";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";
import {useCopyText} from "@/shared/ui/copy-text/model/use-copy-text.ts";

interface CopyTextProps {
    text: string,
}

export const CopyIconButton = ({text}: CopyTextProps) => {
    const {tooltipText, resetTooltipText, copyText} = useCopyText(text);

    return (
        <IconButton
            type={ButtonType.CLEAR}
            size={ButtonSize.SMALL}
            radius={ButtonRadius.SMALL}
            tooltip={tooltipText}
            onClick={copyText}
            onHover={resetTooltipText}
        >
            <CopyIcon/>
        </IconButton>
    );
};