import {ReactNode} from "react";
import {NavLink} from "react-router-dom";
import {SidebarItem} from "@/widgets/main-sidebar-widget/ui/sidebar-item/SidebarItem.tsx";

interface RouteItemProps {
    path: string,
    icon: ReactNode,
    text: string,
    isCollapsed: boolean,
}

export const SidebarNavLink = ({path, icon, text, isCollapsed}: RouteItemProps) => {
    return (
        <NavLink to={path}>
            {({isActive}) => (
                <SidebarItem
                    icon={icon}
                    text={text}
                    isCollapsed={isCollapsed}
                    isActive={isActive}
                />
            )}
        </NavLink>
    );
};