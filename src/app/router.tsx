import {createBrowserRouter, redirect} from "react-router-dom";
import {UserManagementPage} from "@/pages/user-management";
import {NotFoundPage} from "@/pages/errors";
import {AccountsManagementPage} from "@/pages/accounts-management";
import {RemindersPage} from "@/pages/reminders";
import {RolesManagementPage} from "@/pages/roles";
import {ButtonsPage, CitiesPage, MailingPage, OpenAIPage} from "@/pages/settings";
import {ChainPage} from "@/pages/settings/ui/ChainPage.tsx";
import {MainSidebarWidget} from "@/widgets/main-sidebar-widget";
import {SidebarLayout} from "@/shared/ui/page";

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
            element: <RemindersPage/>,
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