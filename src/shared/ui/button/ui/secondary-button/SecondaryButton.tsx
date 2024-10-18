import {FC, ReactNode} from "react";
import styles from './SecondaryButton.module.scss';
import classNames from "classnames";
import {useButtonStateClasses} from "../../model/use-button-state-classes.ts";
import {ButtonState} from "@/shared/ui/button";

interface SecondaryButtonProps {
    state?: ButtonState,
    children: ReactNode;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({ children, state = ButtonState.DEFAULT }) => {
    const { classes, setHovered } = useButtonStateClasses(styles, state);

    return (
        <button
            className={classNames(classes)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </button>
    );
};