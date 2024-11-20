import classNames from "classnames";
import {ContactIcon, DollarCoin, EmployeeTreeIcon, NotificationIcon} from '@/shared/assets';
import styles from './MainSidebarWidget.module.scss';
import {DefaultLogo, LogoImage} from "@/entities/logo";
import {t} from "i18next";
import {routes} from "@/shared/config/routes.ts";
import {SidebarNavLink} from "../SidebarNavLink.tsx";
import {LogoutSidebarButton} from "@/features/logout";
import {CollapseSidebarButton} from "@/features/collapse-sidebar";
import {memo, useCallback, useState} from "react";
import {
    SidebarSettingsSubmenu
} from "@/widgets/main-sidebar-widget/ui/sidebar-settings-submenu/SidebarSettingsSubmenu.tsx";

export const MainSidebarWidget = memo(() => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const logo = isCollapsed ? <LogoImage className={styles.logoImage}/> : <DefaultLogo/>;

    const openSidebar = useCallback(() => {
        setIsCollapsed(false);
    }, []);

    return (
        <aside className={isCollapsed ? classNames(styles.mainSidebar, styles.collapsed) : styles.mainSidebar}>
            <div className={styles.fixedContainer}>
                <header className={styles.headerSection}>
                    {logo}
                </header>
                <section className={styles.desktopSection}>
                    <CollapseSidebarButton isCollapsed={isCollapsed} onChange={setIsCollapsed}/>
                </section>
                <section className={styles.bottomSection}>
                    <div>
                        <SidebarNavLink
                            path={routes.usersManagementPage.path}
                            icon={<ContactIcon/>}
                            text={t('pages.usersManagement.title')}
                            isCollapsed={isCollapsed}
                        />
                        <SidebarNavLink
                            path={routes.rolesPage.path}
                            icon={<EmployeeTreeIcon/>}
                            text={t('pages.roles.title')}
                            isCollapsed={isCollapsed}
                        />
                        <SidebarNavLink
                            path={routes.accountsPage.path}
                            icon={<DollarCoin/>}
                            text={t('pages.accounts.title')}
                            isCollapsed={isCollapsed}
                        />
                        <SidebarNavLink
                            path={routes.remindersPage.path}
                            icon={<NotificationIcon/>}
                            text={t('pages.reminders.title')}
                            isCollapsed={isCollapsed}
                        />
                    </div>

                    <div>
                        <SidebarSettingsSubmenu isCollapsed={isCollapsed} onOpen={openSidebar}/>
                        <LogoutSidebarButton isCollapsed={isCollapsed}/>
                    </div>
                </section>
            </div>
        </aside>
    );
});