import {subscribe, unsubscribe} from "@/shared/utils/resize-observer-event-bus.ts";
import classNames from "classnames";
import {MutableRefObject, ReactNode, useEffect, useRef} from "react";
import {PositionState, usePopoverPosition} from "../model/use-popover-position.ts";
import styles from './Popover.module.scss'

interface PopoverProps {
    target: MutableRefObject<HTMLElement | null>,
    isOpen: boolean,
    className?: string,
    children: ReactNode,
    onPosition?: (state: PositionState) => void
}

export const Popover = (props: PopoverProps) => {
    const { target, isOpen, className, children, onPosition } = props;
    const container = useRef<HTMLDivElement>(null);

    const popoverPosition = usePopoverPosition({ target, container, onPosition });
    
    useEffect(() => {
        const targetEl = target.current;
        const containerEl = container.current;

        if (isOpen && targetEl && containerEl) {
            popoverPosition();
            subscribe(targetEl, popoverPosition);
            subscribe(containerEl, popoverPosition);
            return () => {
                unsubscribe(targetEl, popoverPosition);
                unsubscribe(containerEl, popoverPosition);
            };
        }
    }, [isOpen, popoverPosition, target]);

    if (!isOpen) return null;

    return (
        <div className={classNames(className, styles.popover)} ref={container}>
            {children}
        </div>
    );
};