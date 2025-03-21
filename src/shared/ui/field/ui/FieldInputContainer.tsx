import classNames from "classnames";
import {forwardRef, ReactNode} from "react";
import styles from "./Field.module.scss";

interface InputContainerProps {
    className?: string,
    onClick?: () => void,
    children: ReactNode
}

export const FieldInputContainer = forwardRef<HTMLDivElement, InputContainerProps>((props, ref) => {
    const {className, onClick, children} = props;

    return (
        <div ref={ref} className={classNames(styles.inputContainer, className)} onClick={onClick}>
            {children}
        </div>
    );
});