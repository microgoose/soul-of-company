import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "@/pages/users";
import {NotFoundPage} from "@/pages/errors";

export const router = createBrowserRouter([
    {
        path: '/users',
        element: <UsersPage/>,
        // meta: {title: t('pages.users.title')},
    },
    {
        path: '*',
        element: <NotFoundPage/>,
        // meta: {title: t('pages.notFound.title')},
    },
]);