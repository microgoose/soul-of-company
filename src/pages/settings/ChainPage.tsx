import {ChangePageMode} from "@/features/change-page-mode";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {Page, PageHeader, PageTitle} from "@/shared/layout";
import {ChainSettingsSwitcher, useChainSettingsController} from "@/widgets/chain-settings-widget";
import {t} from "i18next";

export const ChainPage = () => {
    useDocumentTitle(t('pages.chain.title'));
    const chainController = useChainSettingsController();

    return (
        <Page>
            <PageHeader>
                <PageTitle>{t('pages.chain.title')}</PageTitle>
                <ChangePageMode
                    isEditMode={chainController.isEditMode}
                    onEditMode={chainController.handleOnEditMode}
                    onSave={chainController.handleOnSave}
                    onUndo={chainController.handleOnUndo}
                />
            </PageHeader>
            <ChainSettingsSwitcher chainController={chainController}/>
        </Page>
    );
};