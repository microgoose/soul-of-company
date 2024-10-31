import {FC, ReactNode, useCallback, useRef} from "react";
import styles from './IconButton.module.scss';
import classNames from "classnames";
import {useButtonStateClasses} from "../../model/use-button-state-classes.ts";
import {ButtonSize, ButtonState} from "@/shared/ui/button";
import {ButtonType} from "@/shared/ui/button/model/button-type.ts";
import {Tooltip} from "@/shared/ui/tooltip";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";

interface IconButtonProps {
    tooltip?: string,
    state?: ButtonState,
    type?: ButtonType,
    size?: ButtonSize,
    radius?: ButtonRadius,
    children: ReactNode;
    className?: string
    onClick?: () => void
    onHover?: () => void
}

export const IconButton: FC<IconButtonProps> = (props) => {
    const { children, className, tooltip, onClick, onHover } = props;
    const {
        type = ButtonType.FILLED,
        state = ButtonState.DEFAULT,
        size = ButtonSize.MIDDLE,
        radius = ButtonRadius.MIDDLE
    } = props;
    const containerRef = useRef<HTMLButtonElement | null>(null);

    const {classes, hovered, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave} = useButtonStateClasses({
        styles, state, type, size, radius
    });

    const onMouseEnterHandler = useCallback(() => {
        onMouseEnter();

        if (onHover)
            onHover();
    }, [onHover, onMouseEnter]);

    return (
        <button
            className={classNames(classes, className)}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onClick}
            ref={containerRef}
        >
            {hovered && tooltip && <Tooltip containerRef={containerRef}>{tooltip}</Tooltip>}
            {children}
        </button>
    );
};