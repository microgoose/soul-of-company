import classNames from "classnames";
import {ContactIcon, DollarCoin, EmployeeTreeIcon, NotificationIcon} from '@/shared/assets';
import styles from './MainSidebarWidget.module.scss';
import {DefaultLogo, LogoImage} from "@/entities/logo";
import {t} from "i18next";
import {routes} from "@/app/router.tsx";
import {RouteItem} from "../route-item/RouteItem.tsx";
import {LogoutSidebarButton} from "@/features/logout";
import {CollapseSidebarButton} from "@/features/collapse-sidebar";
import {useState} from "react";
import {Submenu} from "@/shared/ui/submenu";

export const MainSidebarWidget = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const logo = isCollapsed ? <LogoImage className={styles.logoImage}/> : <DefaultLogo/>;

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
                        <RouteItem
                            path={routes.usersManagementPage.path}
                            icon={<ContactIcon/>}
                            text={t('pages.usersManagement.title')}
                            isCollapsed={isCollapsed}
                        />
                        <RouteItem
                            path={routes.rolesPage.path}
                            icon={<EmployeeTreeIcon/>}
                            text={t('pages.roles.title')}
                            isCollapsed={isCollapsed}
                        />
                        <RouteItem
                            path={routes.accountsPage.path}
                            icon={<DollarCoin/>}
                            text={t('pages.accounts.title')}
                            isCollapsed={isCollapsed}
                        />
                        <RouteItem
                            path={routes.remindersPage.path}
                            icon={<NotificationIcon/>}
                            text={t('pages.reminders.title')}
                            isCollapsed={isCollapsed}
                        />
                    </div>

                    <div>
                        <Submenu/>
                        <LogoutSidebarButton isCollapsed={isCollapsed}/>
                    </div>
                </section>
            </div>
        </aside>
    );
};