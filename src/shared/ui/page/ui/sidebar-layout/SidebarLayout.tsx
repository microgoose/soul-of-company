import {FC, ReactNode} from "react";
import {Outlet} from "react-router-dom";
import styles from './SidebarLayout.module.scss';

interface PanelBodyFrameProp {
    sidebar: ReactNode,
}

export const SidebarLayout: FC<PanelBodyFrameProp> = ({sidebar}) => {
    return (
        <div className={styles.sidebarLayout}>
            <div>{sidebar}</div>
            <Outlet/>
        </div>
    );
};