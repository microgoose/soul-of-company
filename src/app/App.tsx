import '@/shared/styles/index.scss';
import './i18n';

import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import {withTranslation} from "react-i18next";

export const App = withTranslation()(() => {
    return (
        <RouterProvider router={router} />
    );
});