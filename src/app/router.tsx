import {createBrowserRouter, redirect} from "react-router-dom";
import {UserManagementPage} from "@/pages/user-management";
import {NotFoundPage} from "@/pages/errors";
import {AccountsManagementPage} from "@/pages/accounts-management";
import {RemindersManagementPage} from "@/pages/reminders-management";
import {RolesManagementPage} from "@/pages/roles-management";
import {ButtonsPage, CitiesPage, OpenAIPage} from "@/pages/settings";
import {MainSidebarWidget} from "@/widgets/main-sidebar-widget";
import {SidebarLayout} from "@/shared/ui/page";
import {ChainPage} from "@/pages/chain-settings";
import {MailingPage} from "@/pages/mailing-settings";

export const router = createBrowserRouter([{
    path: '/',
    element: <SidebarLayout sidebar={<MainSidebarWidget/>} />,
    children: [
        {
            path: '/',
            element: <NotFoundPage/>,
            loader: () => redirect('/users')
        },
        {
            path: '/users',
            element: <UserManagementPage/>,
        },
        {
            path: '/roles',
            element: <RolesManagementPage/>,
        },
        {
            path: '/accounts',
            element: <AccountsManagementPage/>,
        },
        {
            path: '/reminders',
            element: <RemindersManagementPage/>,
        },
        {
            path: '/settings/buttons',
            element: <ButtonsPage/>,
        },
        {
            path: '/settings/chain',
            element: <ChainPage/>,
        },
        {
            path: '/settings/cities',
            element: <CitiesPage/>,
        },
        {
            path: '/settings/mailing',
            element: <MailingPage/>,
        },
        {
            path: '/settings/open-ai',
            element: <OpenAIPage/>,
        },
        {
            path: '*',
            element: <NotFoundPage/>
        },
    ]
}]);