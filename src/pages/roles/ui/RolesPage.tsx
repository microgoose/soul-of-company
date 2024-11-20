import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const RolesPage = () => {
    useDocumentTitle(t('pages.roles.title'));

    return (
        <div/>
    );
};