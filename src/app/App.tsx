import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import {withTranslation} from "react-i18next";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import '@/shared/styles/index.scss';
import './daysjs';
import './i18n.ts';
import ErrorBoundary from "./ErrorBoundary.tsx";

const queryClient = new QueryClient();

export const App = withTranslation()(() => {
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ErrorBoundary>
    );
});