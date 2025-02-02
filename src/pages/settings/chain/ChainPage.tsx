import {ChangePageMode} from "@/features/change-page-mode";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";
import {HeaderPage} from "@/shared/layout";
import {DividerTitle} from "@/shared/ui/divider-title";
import {ChainSettingsSwitcher, useChainSettingsController} from "@/widgets/chain-settings-widget";
import {t} from "i18next";
import styles from "./ChainPage.module.scss";

export const ChainPage = () => {
    useDocumentTitle(t('pages.chain.title'));
    const chainController = useChainSettingsController();

    return (
        <HeaderPage>
            <DividerTitle title={t('pages.chain.title')} className={styles.pageTitle}>
                <ChangePageMode
                    isEditMode={chainController.isEditMode}
                    onEditMode={chainController.handleOnEditMode}
                    onSave={chainController.handleOnSave}
                    onUndo={chainController.handleOnUndo}
                />
            </DividerTitle>
            <div className={styles.contentContainer}>
                <ChainSettingsSwitcher chainController={chainController} />
            </div>
        </HeaderPage>
    );
};