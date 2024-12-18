import {ReactNode} from "react";
import styles from './DividerTitle.module.scss';

interface DividerTitleProps {
    title: string,
    children?: ReactNode,
}

export const DividerTitle = ({ title, children }: DividerTitleProps) => {
    return (
        <div className={styles.dividerTitle}>
            <span className={styles.title}>{title}</span>
            {children}
        </div>
    );
}