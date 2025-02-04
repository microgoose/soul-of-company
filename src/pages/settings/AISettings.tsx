import {AddAiConfigButton, AddAiConfigModalForm} from "@/features/add-ai-config-form";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {Page, PageHeader, PageTitle} from "@/shared/layout";
import {InfoTooltip} from "@/shared/ui/tooltip";
import {AiApiTabs} from "@/widgets/ai-api-tabs-widget";
import {t} from "i18next";

export const AISettings = () => {
    useDocumentTitle(t('pages.AISettings.title'));

    return (
        <Page>
            <PageHeader>
                <PageTitle>
                    {t('pages.AISettings.fullTitle')}
                    <InfoTooltip tooltip={t('pages.AISettings.apiSwitchingInfo')}/>
                </PageTitle>
                <AddAiConfigButton/>
            </PageHeader>

            <AiApiTabs/>
            <AddAiConfigModalForm/>
        </Page>
    );
};