import {createBrowserRouter, redirect} from "react-router-dom";
import {UserManagementPage} from "@/pages/user-management";
import {NotFoundPage} from "@/pages/errors";
import {AccountsPage} from "@/pages/accounts";
import {RemindersPage} from "@/pages/reminders";
import {RolesPage} from "@/pages/roles";
import {ButtonsPage, CitiesPage, MailingPage, OpenAIPage} from "@/pages/settings";
import {ChainPage} from "@/pages/settings/ui/ChainPage.tsx";

export const routes = {
    homePage: {
        path: '/',
        element: <NotFoundPage/>,
        loader: () => redirect('/users')
    },
    usersManagementPage: {
        path: '/users',
        element: <UserManagementPage/>
    },
    rolesPage: {
        path: '/roles',
        element: <RolesPage/>,
    },
    accountsPage: {
        path: '/accounts',
        element: <AccountsPage/>,
    },
    remindersPage: {
        path: '/reminders',
        element: <RemindersPage/>,
    },
    settingsButtonsPage: {
        path: '/settings/buttons',
        element: <ButtonsPage/>,
    },
    settingsChainPage: {
        path: '/settings/chain',
        element: <ChainPage/>,
    },
    settingsCitiesPage: {
        path: '/settings/cities',
        element: <CitiesPage/>,
    },
    settingsMailingPage: {
        path: '/settings/mailing',
        element: <MailingPage/>,
    },
    settingsOpenAIPage: {
        path: '/settings/open-ai',
        element: <OpenAIPage/>,
    },
    notFoundPage: {
        path: '*',
        element: <NotFoundPage/>
    },
};

export const router = createBrowserRouter(Object.values(routes));