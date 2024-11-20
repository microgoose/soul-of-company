import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const AccountsPage = () => {
    useDocumentTitle(t('pages.accounts.title'));

    return (
        <div/>
    );
};