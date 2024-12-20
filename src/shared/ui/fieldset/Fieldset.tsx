import styles from './Fieldset.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

interface FieldsetProps {
    className?: string,
    fieldsClassName?: string,
    legend: ReactNode,
    children: ReactNode,
}

export const Fieldset = ({ className, fieldsClassName, legend, children }: FieldsetProps) => {
    return (
        <div className={classNames(styles.fieldset, className)}>
            <p className={styles.legend}>{legend}</p>

            <div className={classNames(fieldsClassName, styles.fields)}>
                {children}
            </div>
        </div>
    );
};