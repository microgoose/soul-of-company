import {t} from "i18next";
import {PageTitle, SidebarLayout} from "@/shared/ui/page";
import {UserManagementTable} from "@/widgets/user-management-table-widget";
import {MainSidebarWidget} from "@/widgets/main-sidebar";

export const UserManagementPage = () => {
    return (
        <>
            <PageTitle title={t('pages.usersManagement.title')}/>
            <SidebarLayout>
                <MainSidebarWidget/>
                <UserManagementTable/>
            </SidebarLayout>
        </>
    );
};