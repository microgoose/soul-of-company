import {UserTableInfoWidget} from "@/widgets/users-table-info";
import {PageTitle} from "@/shared/ui/page/PageTitle.tsx";
import {t} from "i18next";

export const UsersPage = () => {
    return (
        <>
            <PageTitle title={t('pages.users.title')}/>
            <UserTableInfoWidget/>
        </>
    );
};