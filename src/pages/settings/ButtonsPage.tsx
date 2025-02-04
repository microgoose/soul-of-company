import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {Page, PageHeader, PageTitle} from "@/shared/layout";
import {ButtonsWidgetTable} from "@/widgets/edit-buttons-widget";
import {t} from "i18next";

export const ButtonsPage = () => {
    useDocumentTitle(t('pages.buttons.title'));

    return (
        <Page>
            <PageHeader>
                <PageTitle>{t('pages.buttons.title')}</PageTitle>
            </PageHeader>
            <ButtonsWidgetTable/>
        </Page>
    );
};