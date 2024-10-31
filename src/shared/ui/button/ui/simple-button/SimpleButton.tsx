import {FC, ReactNode} from "react";
import styles from './SimpleButton.module.scss';
import classNames from "classnames";
import {useButtonStateClasses} from "../../model/use-button-state-classes.ts";
import {ButtonState} from "@/shared/ui/button";

interface CenteredButtonProps {
    state?: ButtonState,
    children: ReactNode;
    className?: string,
    onClick?: () => void
}

export const SimpleButton: FC<CenteredButtonProps> = ({children, className, onClick, state = ButtonState.DEFAULT}) => {
    const {classes, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave} = useButtonStateClasses({styles, state});

    return (
        <button
            className={classNames(classes, className)}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            {children}
        </button>
    );
};