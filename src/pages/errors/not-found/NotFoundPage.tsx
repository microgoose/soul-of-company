import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {t} from "i18next";

export const NotFoundPage = () => {
    useDocumentTitle(t('pages.notFound.title'));

    return (
        <span>{t('pages.notFound.text')}</span>
    );
};