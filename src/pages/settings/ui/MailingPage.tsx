import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const MailingPage = () => {
    useDocumentTitle(t('pages.mailing.title'));

    return (
            <div/>
    );
};