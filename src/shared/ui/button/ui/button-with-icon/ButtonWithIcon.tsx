import {FC, ReactNode, useCallback} from "react";
import styles from './ButtonWithIcon.module.scss';
import classNames from "classnames";
import {useButtonStateClasses} from "../../model/use-button-state-classes.ts";
import {ButtonState} from "@/shared/ui/button";

interface ButtonWithIconProps {
    state?: ButtonState,
    children: ReactNode;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({children, state = ButtonState.DEFAULT}) => {
    const {classes, setHovered, setActive} = useButtonStateClasses(styles, state);

    const changeActive = useCallback((active: boolean) => {
        if (state === ButtonState.ACTIVE)
            return;

        setActive(active);
    }, [setActive, state]);

    return (
        <button
            className={classNames(classes)}
            onMouseDown={() => changeActive(true)}
            onMouseUp={() => changeActive(false)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </button>
    );
};