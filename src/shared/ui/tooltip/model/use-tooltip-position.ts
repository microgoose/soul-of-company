import {RefObject, useEffect} from "react";

interface UseTooltipPositionProps {
    containerRef: RefObject<HTMLElement>;
    tooltipRef: RefObject<HTMLElement>;
}

export const useTooltipPosition = ({ containerRef, tooltipRef }: UseTooltipPositionProps) => {
    useEffect(() => {
        const calculateTooltipPosition = () => {
            const tooltipEl = tooltipRef.current;
            const containerEL = containerRef.current;

            if (!containerEL || !tooltipEl) return;

            const tooltipRect = tooltipEl.getBoundingClientRect();
            const tooltipWidth = Math.round(tooltipRect.width);
            const tooltipHeight = Math.round(tooltipRect.height);

            const containerRect = containerEL.getBoundingClientRect();
            const containerWidth = Math.round(containerRect.width);
            const containerHeight = Math.round(containerRect.height);

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const spaceRight = windowWidth - containerRect.right;
            const spaceLeft = containerRect.left;
            const spaceTop = containerRect.top;
            const spaceBottom = windowHeight - containerRect.bottom;

            if (spaceLeft > spaceRight) {
                if (spaceTop > spaceBottom) {
                    //left-top
                    tooltipEl.style.left = `${containerRect.left - tooltipWidth}px`;
                    tooltipEl.style.top = `${containerRect.top - tooltipHeight}px`;
                } else {
                    //left-bottom
                    tooltipEl.style.left = `${containerRect.left - tooltipWidth}px`;
                    tooltipEl.style.top = `${containerRect.top + containerHeight}px`;
                }
            } else {
                if (spaceTop > spaceBottom) {
                    //right-top
                    tooltipEl.style.left = `${containerRect.left + containerWidth}px`;
                    tooltipEl.style.top = `${containerRect.top - tooltipHeight}px`;
                } else {
                    //right-bottom
                    tooltipEl.style.left = `${containerRect.left + containerWidth}px`;
                    tooltipEl.style.top = `${containerRect.top + containerHeight}px`;
                }
            }
        };

        calculateTooltipPosition();
        window.addEventListener("resize", calculateTooltipPosition);

        return () => window.removeEventListener("resize", calculateTooltipPosition);
    }, [containerRef, tooltipRef]);
};