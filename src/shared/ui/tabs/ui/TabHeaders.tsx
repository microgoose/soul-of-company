import {TabItem, TabsController, useTabsContext} from "@/shared/ui/tabs/model/use-tabs.ts";
import {TabHeader} from "@/shared/ui/tabs/ui/TabHeader.tsx";
import {ReactNode} from "react";
import styles from './TabHeaders.module.scss';

type Props = {
    children?: (controller: TabsController, tab: TabItem) => ReactNode
}

export const TabHeaders = ({ children }: Props) => {
    const controller = useTabsContext();

    return (
        <div className={styles.tabLabels}>
            {controller.tabs.map(tab => (
                <TabHeader key={tab.id} controller={controller} tab={tab} children={children}/>
            ))}
            <div className={styles.emptySpaceTab}/>
        </div>
    );
};