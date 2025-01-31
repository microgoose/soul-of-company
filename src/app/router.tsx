import {createBrowserRouter, redirect} from "react-router-dom";
import {UserManagementPage} from "@/pages/user-management";
import {NotFoundPage} from "@/pages/errors";
import {AccountsManagementPage} from "@/pages/accounts-management";
import {RemindersManagementPage} from "@/pages/reminders-management";
import {RolesManagementPage} from "@/pages/roles-management";
import {ButtonsPage, ChainPage, CitiesPage, MailingPage, AISettings} from "@/pages/settings";
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