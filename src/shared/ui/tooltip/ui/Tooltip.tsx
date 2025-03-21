import classNames from "classnames";
import {ReactNode, RefObject, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {tooltipPositionSystem} from "../model/tooltip-position-system.ts";
import style from './Tooltip.module.scss';

interface TooltipProps {
    className?: string;
    containerRef: RefObject<HTMLElement>,
    children: ReactNode,
}

export const Tooltip = ({containerRef, children, className}: TooltipProps) => {
    const tooltipRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const tooltipEl = tooltipRef.current;
        const containerEL = containerRef.current;

        if (!containerEL || !tooltipEl) return;

        tooltipPositionSystem({containerEL, tooltipEl});
    }, [containerRef, tooltipRef, children]);

    return ReactDOM.createPortal(
        <span className={classNames(style.tooltip, className)} ref={tooltipRef}>
            {children}
        </span>,
        document.body
    );
};