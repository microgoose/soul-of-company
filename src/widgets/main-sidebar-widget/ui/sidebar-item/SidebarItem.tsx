import {ButtonState, IconButton, SimpleButton} from "@/shared/ui/button";
import classNames from "classnames";
import {ReactNode} from "react";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
    icon: ReactNode,
    text: string,
    isCollapsed: boolean,
    isActive: boolean,
    onClick?: () => void,
}

export const SidebarItem = ({icon, text, isCollapsed, isActive, onClick}: SidebarItemProps) => {
    const className = classNames(styles.sidebarItem, {
        [styles.collapsed]: isCollapsed,
        [styles.active]: isActive,
    });

    if (isActive) {
        if (isCollapsed) {
            return <IconButton className={className} tooltip={text} state={ButtonState.ACTIVE}>{icon}</IconButton>;
        }

        return (
            <SimpleButton state={ButtonState.ACTIVE} className={className} onClick={onClick}>
                {icon}
                <span className={styles.text}>{text}</span>
            </SimpleButton>
        );
    }

    if (isCollapsed) {
        return <IconButton className={className} tooltip={text}>{icon}</IconButton>;
    }

    return (
        <SimpleButton className={className} onClick={onClick}>
            {icon}
            <span className={styles.text}>{text}</span>
        </SimpleButton>
    );
};