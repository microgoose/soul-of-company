import {FC, ReactNode} from "react";
import styles from './SidebarLayout.module.scss';

interface PanelBodyFrameProp {
    sidebar: ReactNode,
    children: ReactNode,
}

export const SidebarLayout: FC<PanelBodyFrameProp> = ({sidebar, children}) => {
    return (
        <div className={styles.sidebarLayout}>
            <div>{sidebar}</div>
            <div>{children}</div>
        </div>
    );
};