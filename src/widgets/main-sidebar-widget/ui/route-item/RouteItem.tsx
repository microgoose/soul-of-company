import classNames from "classnames";
import {NavLink, type NavLinkRenderProps} from "react-router-dom";
import styles from "./RouteItem.module.scss";
import {FC, ReactNode, useCallback} from "react";
import {ButtonState, IconButton} from "@/shared/ui/button";

interface RouteItemProps {
    path: string,
    icon: ReactNode,
    text: string,
    isCollapsed: boolean,
}

export const RouteItem: FC<RouteItemProps> = ({path, icon, text, isCollapsed}) => {
    const routeItemClasses = useCallback(({isActive}: NavLinkRenderProps): string => {
        const classes = [styles.routeItem];

        if (isActive)
            classes.push(styles.active)

        return classNames(classes);
    }, []);

    if (isCollapsed) {
        return (
            <NavLink to={path}>
                {({ isActive }) => (
                    <IconButton tooltip={text} state={isActive? ButtonState.ACTIVE : ButtonState.DEFAULT}>
                        {icon}
                    </IconButton>
                )}
            </NavLink>
        );
    }

    return (
        <NavLink to={path} className={routeItemClasses}>
            {icon}
            <span className={styles.text}>{text}</span>
        </NavLink>
    );
};