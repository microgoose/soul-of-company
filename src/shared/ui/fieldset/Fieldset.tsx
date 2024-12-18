import styles from './Fieldset.module.scss';
import {ReactNode} from "react";

interface FieldsetProps {
    legend: ReactNode,
    children: ReactNode,
}

export const Fieldset = ({ legend, children }: FieldsetProps) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend>{legend}</legend>
            <div className={styles.fields}>
                {children}
            </div>
        </fieldset>
    );
};