import {useCallback, useRef, useState} from "react";

export const useTooltipVisibilitySystem = () => {
    const infoCircleRef = useRef<HTMLSpanElement>(null);
    const [infoCircleHovered, setInfoCircleHovered] = useState(false);
    const onMouseEnterHandler = useCallback(() => setInfoCircleHovered(true), []);
    const onMouseLeaveHandler = useCallback(() => setInfoCircleHovered(false), []);

    return {infoCircleRef, infoCircleHovered, onMouseEnterHandler, onMouseLeaveHandler};
};
