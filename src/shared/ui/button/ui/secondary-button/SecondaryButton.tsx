import {FC, ReactNode} from "react";
import styles from './SecondaryButton.module.scss';
import classNames from "classnames";
import {useButtonStateClasses} from "../../model/use-button-state-classes.ts";
import {ButtonState} from "@/shared/ui/button";

interface SecondaryButtonProps {
    state?: ButtonState,
    className?: string,
    children: ReactNode;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({ children, className, state = ButtonState.DEFAULT }) => {
    const { classes, onMouseEnter, onMouseLeave } = useButtonStateClasses({styles, state});

    return (
        <button
            className={classNames(classes, className)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </button>
    );
};