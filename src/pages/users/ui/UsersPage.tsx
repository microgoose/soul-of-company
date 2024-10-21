import {t} from "i18next";
import {PageTitle, SidebarLayout} from "@/shared/ui/page";
import {UserTableInfoWidget} from "@/widgets/users-table-info";
import {MainSidebarWidget} from "@/widgets/main-sidebar";

export const UsersPage = () => {
    return (
        <>
            <PageTitle title={t('pages.users.title')}/>
            <SidebarLayout>
                <MainSidebarWidget/>
                <UserTableInfoWidget/>
            </SidebarLayout>
        </>
    );
};