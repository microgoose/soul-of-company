import {AccountsManagementPage} from "@/pages/accounts";
import {NotFoundPage} from "@/pages/errors";
import {RemindersManagementPage} from "@/pages/reminders";
import {RolesManagementPage} from "@/pages/roles";
import {AISettings, ButtonsPage, ChainPage, CitiesPage, MailingPage} from "@/pages/settings";
import {UserManagementPage} from "@/pages/user-management";
import {SidebarLayout} from "@/shared/ui/page";
import {MainSidebarWidget} from "@/widgets/main-sidebar-widget";
import {createBrowserRouter, redirect} from "react-router-dom";

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
            path: '/settings/ai',
            element: <AISettings/>,
        },
        {
            path: '*',
            element: <NotFoundPage/>
        },
    ]
}]);