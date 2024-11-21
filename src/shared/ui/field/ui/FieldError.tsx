import {ReactNode} from "react";
import styles from "./Field.module.scss";

interface InputErrorProps {
    children: ReactNode
}

export const FieldError = ({children}: InputErrorProps) => {
    return (
        <p className={styles.error}>{children}</p>
    );
};