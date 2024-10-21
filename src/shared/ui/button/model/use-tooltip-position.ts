import {FC, RefObject, useEffect, useState} from "react";

interface UseTooltipPositionProps {
    triggerRef: RefObject<HTMLElement>;
    sides: {
        leftTop: string;
        rightTop: string;
        leftBottom: string;
        rightBottom: string;
    };
}

export const useTooltipPosition: FC<UseTooltipPositionProps> = ({ triggerRef, sides }) => {
    const [tooltipPosition, setTooltipPosition] = useState<string>(sides.leftBottom);

    useEffect(() => {
        const calculateTooltipPosition = () => {
            const triggerElement = triggerRef.current;
            if (!triggerElement) return;

            const rect = triggerElement.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const spaceRight = windowWidth - rect.right;
            const spaceLeft = rect.left;
            const spaceTop = rect.top;
            const spaceBottom = windowHeight - rect.bottom;

            let position: string;

            const maxSpace = Math.max(spaceRight, spaceLeft, spaceTop, spaceBottom);

            if (maxSpace === spaceRight && spaceBottom > spaceTop) {
                position = sides.rightBottom;
            } else if (maxSpace === spaceRight && spaceTop > spaceBottom) {
                position = sides.rightTop;
            } else if (maxSpace === spaceLeft && spaceBottom > spaceTop) {
                position = sides.leftBottom;
            } else if (maxSpace === spaceLeft && spaceTop > spaceBottom) {
                position = sides.leftTop;
            } else if (maxSpace === spaceTop) {
                position = sides.leftTop;
            } else {
                position = sides.leftBottom;
            }

            setTooltipPosition(position);
        };

        calculateTooltipPosition();
        window.addEventListener("resize", calculateTooltipPosition);

        return () => window.removeEventListener("resize", calculateTooltipPosition);
    }, [triggerRef, sides]);

    return tooltipPosition;
};