import {NavLink} from "react-router-dom";
import styles from "./RouteItem.module.scss";
import {FC, ReactNode} from "react";
import {ButtonState, IconButton, SimpleButton} from "@/shared/ui/button";

interface RouteItemProps {
    path: string,
    icon: ReactNode,
    text: string,
    isCollapsed: boolean,
}

export const RouteItem: FC<RouteItemProps> = ({path, icon, text, isCollapsed}) => {
    if (isCollapsed) {
        return (
            <NavLink to={path}>
                {({ isActive }) => isActive?
                    (<IconButton tooltip={text} state={ButtonState.ACTIVE}>{icon}</IconButton>) :
                    (<IconButton tooltip={text}>{icon}</IconButton>)
                }
            </NavLink>
        );
    }

    return (
        <NavLink to={path} className={styles.routeItem}>
            {({ isActive }) => isActive?
                (<SimpleButton state={ButtonState.ACTIVE}>
                    {icon}
                    <span className={styles.text}>{text}</span>
                </SimpleButton>) :
                (<SimpleButton>
                    {icon}
                    <span className={styles.text}>{text}</span>
                </SimpleButton>)
            }
        </NavLink>
    );
};