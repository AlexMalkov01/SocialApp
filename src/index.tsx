import { render } from "react-dom";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import "shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById("root")
);