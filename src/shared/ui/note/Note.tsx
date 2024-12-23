import styles from './Note.module.scss';
import {ReactNode} from "react";
import classNames from "classnames";

interface NoteProps {
    title: string,
    className?: string,
    bodyClassName?: string,
    children: ReactNode,
}

export const Note = ({ title, className, bodyClassName, children }: NoteProps) => {
    return (
        <div className={classNames(className, styles.noteContainer)}>
            <span className={styles.header}>{title}</span>
            <div className={classNames(bodyClassName, styles.body)}>
                {children}
            </div>
        </div>
    );
};