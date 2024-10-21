import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "@/pages/users";
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
    usersPage: {
        path: '/users',
        element: <UsersPage/>
    },
    notFoundPage: {
        path: '*',
        element: <NotFoundPage/>
    },
};

export const router = createBrowserRouter(Object.values(routes));