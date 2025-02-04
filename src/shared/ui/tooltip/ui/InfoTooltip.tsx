import {InfoCircle} from "@/shared/assets";
import {Tooltip} from "@/shared/ui/tooltip";
import {useTooltipVisibilitySystem} from "../model/tooltip-visibility-system.ts";
import styles from './InfoTooltip.module.scss';

interface InfoTooltipProps {
    tooltip?: string
}

export const InfoTooltip = ({tooltip}: InfoTooltipProps) => {
    const {infoCircleRef, infoCircleHovered, onMouseEnterHandler, onMouseLeaveHandler} = useTooltipVisibilitySystem();

    if (tooltip) {
        return (
            <>
                <i
                    ref={infoCircleRef}
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                    className={styles.infoIcon}
                >
                    <InfoCircle/>
                </i>

                {infoCircleHovered &&
                    <Tooltip containerRef={infoCircleRef} className={styles.infoTooltip}>
                        {tooltip}
                    </Tooltip>}
            </>
        )
    }

    return null;
}