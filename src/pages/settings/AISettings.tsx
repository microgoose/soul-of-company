import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {Page, PageHeader, PageTitle} from "@/shared/layout";
import {AiApiTabs} from "@/widgets/ai-api-tabs-widget";
import {t} from "i18next";

export const AISettings = () => {
    useDocumentTitle(t('pages.AISettings.title'));

    return (
        <Page>
            <PageHeader>
                <PageTitle>{t('pages.AISettings.fullTitle')}</PageTitle>
            </PageHeader>
            <AiApiTabs/>
        </Page>
    );
};