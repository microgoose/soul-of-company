import {InfoCircle} from "@/shared/assets";
import {Tooltip} from "@/shared/ui/tooltip";
import {useCallback, useRef, useState} from "react";

interface StatusTooltipProps {
    tooltip?: string,
}

export const TagStatusTooltip = ({tooltip}: StatusTooltipProps) => {
    const infoCircleRef = useRef<HTMLSpanElement>(null);
    const [infoCircleHovered, setInfoCircleHovered] = useState(false);
    const onMouseEnterHandler = useCallback(() => setInfoCircleHovered(true), []);
    const onMouseLeaveHandler = useCallback(() => setInfoCircleHovered(false), []);

    if (tooltip) {
        return (
            <>
                <i ref={infoCircleRef} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
                    <InfoCircle/>
                </i>

                {infoCircleHovered && <Tooltip containerRef={infoCircleRef}>{tooltip}</Tooltip>}
            </>
        )
    }

    return null;
}