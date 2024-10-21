import {createBrowserRouter} from "react-router-dom";
import {UserManagementPage} from "pages/user-management";
import {NotFoundPage} from "@/pages/errors";

export const routes = {
    homePage: {
        path: '/',
        element: <NotFoundPage/>,
    },
    accountsPage: {
        path: '/accounts',
        element: <NotFoundPage/>,
    },
    desktopPage: {
        path: '/desktop',
        element: <NotFoundPage/>,
    },
    remindersPage: {
        path: '/reminders',
        element: <NotFoundPage/>,
    },
    rolesPage: {
        path: '/roles',
        element: <NotFoundPage/>,
    },
    settingsPage: {
        path: '/settings',
        element: <NotFoundPage/>,
    },
    usersManagementPage: {
        path: '/users',
        element: <UserManagementPage/>
    },
    notFoundPage: {
        path: '*',
        element: <NotFoundPage/>
    },
};

export const router = createBrowserRouter(Object.values(routes));