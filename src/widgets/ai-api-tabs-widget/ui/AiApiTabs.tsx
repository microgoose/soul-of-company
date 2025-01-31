import {TabBody, TabHeaders} from "@/shared/ui/tabs";
import {useAaiApiTabs} from "@/widgets/ai-api-tabs-widget";
import {TabManager} from "@/shared/ui/tabs/ui/TabManager.tsx";
import {AiApiTab} from "@/widgets/ai-api-tabs-widget/ui/AiApiTab.tsx";
import styles from './AiApiTabs.module.scss';

export const AiApiTabs = () => {
    const {isLoading, tabs, aiConfig, aiHistory} = useAaiApiTabs();

    return (
        <TabManager controller={tabs} className={styles.aiApiTabs}>
            <TabHeaders/>
            <TabBody>
                <AiApiTab
                    isLoading={isLoading}
                    aiConfig={aiConfig}
                    aiHistory={aiHistory}
                />
            </TabBody>
        </TabManager>
    );
};