import styles from './Note.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

interface NoteProps {
    title: string,
    className?: string,
    children: ReactNode,
}

export const Note = ({ title, className, children }: NoteProps) => {
    return (
        <div className={classNames(className, styles.noteContainer)}>
            <span className={styles.header}>{title}</span>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};