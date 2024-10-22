import {FC, ReactNode} from "react";
import styles from './PrimaryButton.module.scss';
import classNames from "classnames";
import {useButtonStateClasses} from "../../model/use-button-state-classes.ts";
import {ButtonState} from "@/shared/ui/button";

interface PrimaryButtonProps {
    state?: ButtonState,
    children: ReactNode;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, state = ButtonState.DEFAULT }) => {
    const { classes, onMouseEnter, onMouseLeave } = useButtonStateClasses({styles, state});

    return (
        <button
            className={classNames(classes)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </button>
    );
};