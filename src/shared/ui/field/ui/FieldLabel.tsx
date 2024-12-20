import {ReactNode} from "react";
import styles from "./Field.module.scss";

interface InputLabelProps {
    children: ReactNode
}

export const FieldLabel = ({children}: InputLabelProps) => {
    return (
        <label role='label' className={styles.label}>{children}</label>
    );
};