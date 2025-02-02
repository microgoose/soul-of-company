import classNames from "classnames";
import {ReactNode} from "react";
import styles from './DividerTitle.module.scss';

interface DividerTitleProps {
    title: string,
    className?: string,
    children?: ReactNode,
}

export const DividerTitle = ({ title, className, children }: DividerTitleProps) => {
    return (
        <div className={classNames(styles.dividerTitle, className)}>
            <span className={styles.title}>{title}</span>
            {children}
        </div>
    );
}