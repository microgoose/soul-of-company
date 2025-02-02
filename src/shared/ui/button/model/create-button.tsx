import {ButtonSize, ButtonState, ButtonType} from "@/shared/ui/button";
import {ButtonRadius} from "@/shared/ui/button/model/button-radius.ts";
import {useButtonStateClasses} from "@/shared/ui/button/model/use-button-state-classes.ts";
import {Tooltip} from "@/shared/ui/tooltip";
import classNames from "classnames";
import {ReactNode, useCallback, useRef} from "react";

interface ButtonStateProps {
    state?: ButtonState,
    type?: ButtonType,
    size?: ButtonSize,
    radius?: ButtonRadius,
}

interface ButtonProps extends ButtonStateProps {
    tooltip?: string,
    children: ReactNode;
    className?: string
    onClick?: () => void
    onHover?: () => void
}

export const createButton = (styles: Record<string, string>, defaultState?: ButtonStateProps) => (props: ButtonProps) => {
    const {children, className, tooltip, onClick, onHover} = props;
    const {
        type = ButtonType.FILLED,
        state = ButtonState.DEFAULT,
        size = ButtonSize.MIDDLE,
        radius = ButtonRadius.MIDDLE,
    } = { ...defaultState, ...props };
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