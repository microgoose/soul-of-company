import classNames from "classnames";
import {ReactNode} from "react";
import styles from './Fieldset.module.scss';

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