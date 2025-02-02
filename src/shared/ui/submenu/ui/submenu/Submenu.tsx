import classNames from "classnames";
import {ReactElement, ReactNode} from "react";
import styles from './Submenu.module.scss';

interface SubmenuProps {
    isOpened: boolean,
    button: ReactElement,
    children: ReactNode,
    listClasses?: string
}

export const Submenu = ({ isOpened, button, children, listClasses }: SubmenuProps) => {
    return (
        <div className={classNames(styles.submenu, {[styles.isOpened]: isOpened})}>
            <div className={styles.listContainer}>
                <div className={classNames(styles.list, listClasses)}>
                    {children}
                </div>
            </div>

            {button}
        </div>
    );
};