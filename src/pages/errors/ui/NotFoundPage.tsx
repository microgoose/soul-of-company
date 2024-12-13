import {t} from "i18next";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const NotFoundPage = () => {
    useDocumentTitle(t('pages.notFound.title'));

    return (
        <span>{t('pages.notFound.title')}</span>
    );
};