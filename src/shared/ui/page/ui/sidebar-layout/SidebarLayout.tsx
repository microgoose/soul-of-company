import {FC, ReactNode} from "react";
import styles from './SidebarLayout.module.scss';

interface PanelBodyFrameProp {
    children: ReactNode
}

export const SidebarLayout: FC<PanelBodyFrameProp> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};