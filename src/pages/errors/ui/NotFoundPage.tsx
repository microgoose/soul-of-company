import {PageTitle} from "@/shared/ui/page/ui/page-title/PageTitle.tsx";
import {t} from "i18next";

export const NotFoundPage = () => {
    return (
        <>
            <PageTitle title={t('pages.notFound.title')}/>
            <span>{t('pages.notFound.text')}</span>
        </>
    );
};