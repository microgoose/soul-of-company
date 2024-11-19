import {t} from "i18next";
import {SidebarLayout} from "@/shared/ui/page";
import {MainSidebarWidget} from "@/widgets/main-sidebar-widget";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const CitiesPage = () => {
    useDocumentTitle(t('pages.cities.title'));

    return (
        <SidebarLayout sidebar={<MainSidebarWidget/>}>
            <div/>
        </SidebarLayout>
    );
};