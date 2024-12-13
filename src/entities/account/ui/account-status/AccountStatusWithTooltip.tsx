import {AccountStatus} from "@/shared/types/entities";
import {InfoCircle} from "@/shared/assets";
import {Tooltip} from "@/shared/ui/tooltip";
import {useCallback, useRef, useState} from "react";

interface AccountStatusInProgressProps {
    accountStatus: AccountStatus,
    statusComment: string | null,
    className: string,
}

export const AccountStatusWithTooltip = ({accountStatus, statusComment, className}: AccountStatusInProgressProps) => {
    const infoCircleRef = useRef<HTMLSpanElement>(null);
    const [infoCircleHovered, setInfoCircleHovered] = useState(false);
    const onMouseEnterHandler = useCallback(() => setInfoCircleHovered(true), []);
    const onMouseLeaveHandler = useCallback(() => setInfoCircleHovered(false), []);

    return (
        <div className={className}>
            <span>{accountStatus.name}</span>
            <span
                ref={infoCircleRef}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                <InfoCircle/>
            </span>

            {statusComment && infoCircleHovered &&
                <Tooltip  containerRef={infoCircleRef}>{statusComment}</Tooltip>}
        </div>
    );
}