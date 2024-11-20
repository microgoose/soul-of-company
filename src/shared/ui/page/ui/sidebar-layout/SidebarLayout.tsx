import {FC, ReactNode} from "react";
import styles from './SidebarLayout.module.scss';
import {Outlet} from "react-router-dom";

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