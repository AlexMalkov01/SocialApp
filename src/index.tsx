import { render } from "react-dom";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import "shared/config/i18n/i18n";
import { PageLoader } from "shared/ui/PageLoader/ui/PageLoader";
import { ErrorBoundary } from "app/providers/ErrorBoundary";


render(
    <BrowserRouter>
        <Suspense fallback={<PageLoader/>}>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </Suspense>
    </BrowserRouter>,
    document.getElementById("root")
);