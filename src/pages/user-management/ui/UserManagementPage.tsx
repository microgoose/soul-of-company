import {t} from "i18next";
import {UsersManagementWidget} from "@/widgets/user-management-widget";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const UserManagementPage = () => {
    useDocumentTitle(t('pages.usersManagement.title'));

    return (
        <UsersManagementWidget/>
    );
};