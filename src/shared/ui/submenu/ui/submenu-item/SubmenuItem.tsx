import {ReactNode} from "react";
import styles from './SubmenuItem.module.scss';

interface SubmenuItemProps {
    children: ReactNode,
}

export const SubmenuItem = ({ children }: SubmenuItemProps) => {
    return (
        <div className={styles.submenuItem}>
            {children}
        </div>
    );
};