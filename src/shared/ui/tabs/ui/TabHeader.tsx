import {TabItem, TabsController} from "@/shared/ui/tabs/model/use-tabs.ts";
import classNames from "classnames";
import {ReactNode} from "react";
import styles from './TabHeader.module.scss';

export type ChildrenProps = {
    controller: TabsController,
    tab: TabItem
}

type Props = {
    controller: TabsController,
    tab: TabItem,
    children?: (props: ChildrenProps) => ReactNode,
}

export const TabHeader = ({ children, controller, tab }: Props) => {
    return (
        <button
            key={tab.id}
            className={classNames(styles.tabLabel, {[styles.isActiveTab]: controller.activeTab?.id === tab.id})}
            title={tab.label}
            onClick={() => controller.activateTab(tab.id)}
        >
            {children? children({ controller, tab }) : tab.label}
        </button>
    );
};