import {t} from "i18next";
import {SidebarLayout} from "@/shared/ui/page";
import {MainSidebarWidget} from "@/widgets/main-sidebar-widget";
import {UsersManagementWidget} from "@/widgets/user-management-table-widget";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const UserManagementPage = () => {
    useDocumentTitle(t('pages.usersManagement.title'));

    return (
        <SidebarLayout sidebar={<MainSidebarWidget/>}>
            <UsersManagementWidget/>
        </SidebarLayout>
    );
};