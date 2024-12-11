import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import {withTranslation} from "react-i18next";

import '@/shared/styles/index.scss';
import './daysjs';
import './i18n.ts';
import ErrorBoundary from "@/app/ErrorBoundary.tsx";

export const App = withTranslation()(() => {
    return (
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    );
});