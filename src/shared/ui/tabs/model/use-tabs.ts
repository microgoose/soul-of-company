import {t} from "i18next";
import {createContext, useContext, useState} from "react";

export type TabId = string | number;
export type TabItem = { id: TabId, label: string };
export interface TabsController {
    tabs: TabItem[];
    activeTab: TabItem | undefined;
    addTab: (tab: TabItem) => void;
    removeTab: (tab: TabItem) => void;
    replaceTabs: (tabs: TabItem[]) => void;
    activateTab: (id: TabId) => void;
}

export const useTabs = (): TabsController => {
    const [tabs, setTabs] = useState<TabItem[]>([]);
    const [activeTab, setActiveTab] = useState<TabItem>();

    const addTab = (tab: TabItem) => {
        setTabs((prev) => [...prev, tab]);
    };

    const removeTab = (tab: TabItem) => {
        setTabs((prev) => prev.filter(t => t !== tab));
    };

    const replaceTabs = (tabs: TabItem[]) => {
        setActiveTab(undefined);
        setTabs(tabs);
    };

    const activateTab = (id: TabId) => {
        const tab = tabs.find(t => t.id === id);
        if (tab) {
            setActiveTab(tab);
        } else {
            throw new Error(`${t('tabs.unableToActivateTab')} "${id}"`);
        }
    };

    return { tabs, activeTab, addTab, removeTab, replaceTabs, activateTab };
};

export const TabsContext = createContext<TabsController | null>(null);

export const useTabsContext = () => {
    const context = useContext(TabsContext);
    if (!context) throw new Error(t("errors.tabsContextNotInitialized"));
    return context;
}