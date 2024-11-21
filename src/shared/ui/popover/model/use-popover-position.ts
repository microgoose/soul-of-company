import {MutableRefObject, useCallback, useEffect} from "react";

interface UsePopoverPositionProps {
    target: MutableRefObject<HTMLElement | null>;
    container: MutableRefObject<HTMLElement | null>;
    onPosition?: (state: PositionState) => void;
}

export enum PositionState {
    IS_BELOW,
    IS_ABOVE,
    IS_RIGHT,
    IS_LEFT,
}

export const usePopoverPosition = ({ target, container, onPosition }: UsePopoverPositionProps) => {
    const positionPopover = useCallback(() => {
        if (!target.current || !container.current) return;

        const targetRect = target.current.getBoundingClientRect();
        const containerRect = container.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate available space in each direction
        const spaceTop = targetRect.top;
        const spaceBottom = viewportHeight - targetRect.bottom;
        const spaceLeft = targetRect.left;
        const spaceRight = viewportWidth - targetRect.right;

        // Determine the direction with the most space
        let translateX = 0;
        let translateY = 0;

        // Calculate position
        let positionState = PositionState.IS_BELOW;

        if (spaceBottom >= containerRect.height) {
            // Place below
            translateY = targetRect.bottom - targetRect.top;
        } else if (spaceTop >= containerRect.height) {
            // Place above
            translateY = -containerRect.height;
            positionState = PositionState.IS_ABOVE;
        } else if (spaceLeft >= containerRect.width) {
            // Place to the right
            translateX = targetRect.right - targetRect.left;
            positionState = PositionState.IS_RIGHT;
        } else if (spaceRight >= containerRect.width) {
            // Place to the left
            translateX = -containerRect.width;
            positionState = PositionState.IS_LEFT;
        } else {
            // Default to placing below if no space fits perfectly
            translateY = targetRect.bottom - targetRect.top;
        }

        // Apply styles to position the container
        container.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
        onPosition?.(positionState);
    }, [container, onPosition, target]);

    useEffect(() => {
        // Recalculate on window resize
        window.addEventListener("resize", positionPopover);

        return () => {
            window.removeEventListener("resize", positionPopover);
        };
    }, [target, container, positionPopover]);

    return positionPopover;
};
