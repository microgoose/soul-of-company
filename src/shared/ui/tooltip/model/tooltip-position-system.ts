interface UseTooltipPositionProps {
    tooltipEl: HTMLElement;
    containerEL: HTMLElement;
}

export const tooltipPositionSystem = ({ tooltipEl, containerEL }: UseTooltipPositionProps) => {
    const calculateTooltipPosition = (event: MouseEvent) => {
        const tooltipRect = tooltipEl.getBoundingClientRect();
        const tooltipWidth = Math.round(tooltipRect.width);
        const tooltipHeight = Math.round(tooltipRect.height);

        const cursorX = event.clientX;
        const cursorY = event.clientY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let left = cursorX + 10;
        let top = cursorY + 10;

        if (left + tooltipWidth > windowWidth) {
            left = cursorX - tooltipWidth - 10;
        }
        if (top + tooltipHeight > windowHeight) {
            top = cursorY - tooltipHeight - 10;
        }

        tooltipEl.style.left = `${left}px`;
        tooltipEl.style.top = `${top}px`;
    };

    containerEL.addEventListener("mousemove", calculateTooltipPosition);

    return () => containerEL.removeEventListener("mousemove", calculateTooltipPosition);
};
