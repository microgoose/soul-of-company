import {TabsController} from "@/shared/ui/tabs/model/use-tabs.ts";
import {t} from "i18next";
import styles from './StubTab.module.scss';

type Props = {
    controller: TabsController
}

export const StubTab = ({controller}: Props) => {
    if (controller.tabs.length === 0) {
        return (
            <div className={styles.defaultTab}>
                {t('tabs.tabsIsEmpty')}
            </div>
        );
    }

    if (!controller.activeTab) {
        return (
            <div className={styles.defaultTab}>
                {t('tabs.selectTab')}
            </div>
        );
    }

    return (
        <div className={styles.defaultTab}/>
    )
};