import ReactDOM from "react-dom";
import {ReactNode, RefObject, useRef} from "react";
import {useTooltipPosition} from "./model/use-tooltip-position.ts";
import style from './Tooltip.module.scss';

interface TooltipProps {
    containerRef: RefObject<HTMLElement>,
    children: ReactNode,
}

export const Tooltip = ({ containerRef, children }: TooltipProps) => {
    const tooltipRef = useRef<HTMLSpanElement | null>(null);

    useTooltipPosition({ containerRef, tooltipRef });

    return ReactDOM.createPortal(
        <span className={style.tooltip} ref={tooltipRef}>
            {children}
        </span>,
        document.body
    );
};