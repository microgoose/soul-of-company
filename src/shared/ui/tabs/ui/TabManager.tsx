import {TabsContext, TabsController} from "@/shared/ui/tabs/model/use-tabs.ts";
import classNames from "classnames";
import {ReactNode} from "react";
import styles from './TabManager.module.scss';

type Props = {
    className?: string,
    controller: TabsController,
    children: ReactNode
}

export const TabManager = ({ className, controller, children }: Props) => {
    return (
        <TabsContext.Provider value={controller}>
            <div className={classNames(styles.tabsContainer, className)}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};