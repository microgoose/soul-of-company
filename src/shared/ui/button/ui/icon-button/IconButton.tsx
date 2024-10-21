import {FC, ReactNode, useRef} from "react";
import styles from './IconButton.module.scss';
import classNames from "classnames";
import {useButtonStateClasses} from "../../model/use-button-state-classes.ts";
import {ButtonState} from "@/shared/ui/button";
import {useTooltipPosition} from "@/shared/ui/button/model/use-tooltip-position.ts";

interface IconButtonProps {
    tooltip?: string,
    state?: ButtonState,
    children: ReactNode;
    className?: string
}

const sides = {
    leftTop: styles.tooltipLeftTop,
    rightTop: styles.tooltipRightTop,
    leftBottom: styles.tooltipLeftBottom,
    rightBottom: styles.tooltipRightBottom,
};

export const IconButton: FC<IconButtonProps> = (props) => {
    const { children, className, tooltip, state = ButtonState.DEFAULT } = props;
    const { classes, setHovered, setActive } = useButtonStateClasses(styles, state);
    const triggerRef = useRef<HTMLSpanElement | null>(null);
    const tooltipPosition = useTooltipPosition({
        triggerRef,
        sides
    });

    return (
        <button
            className={classNames(classes, className)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
        >
            {tooltip? <span ref={triggerRef} className={classNames(styles.tooltip, tooltipPosition)}>{tooltip}</span> : null}
            {children}
        </button>
    );
};