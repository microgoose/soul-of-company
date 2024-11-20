import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const RemindersPage = () => {
    useDocumentTitle(t('pages.reminders.title'));

    return (
        <div/>
    );
};