import {t} from "i18next";
import {SidebarLayout} from "@/shared/ui/page";
import {MainSidebarWidget} from "@/widgets/main-sidebar-widget";
import {useDocumentTitle} from "@/shared/hooks/use-document-title.ts";

export const MailingPage = () => {
    useDocumentTitle(t('pages.mailing.title'));

    return (
        <SidebarLayout sidebar={<MainSidebarWidget/>}>
            <div/>
        </SidebarLayout>
    );
};