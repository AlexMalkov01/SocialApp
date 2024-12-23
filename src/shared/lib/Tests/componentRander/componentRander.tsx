import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nJustTest from "shared/config/i18n/i18nJustTest";
import { MemoryRouter } from "react-router-dom";

export interface componentRanderOptions {
    route?: string;
}
export function ComponentRander (component:ReactNode , options:componentRanderOptions = {}) {

    const { route = "/" } = options;

    return render(
        <MemoryRouter initialEntries={[]}>
        <I18nextProvider i18n={i18nJustTest}>
            {component}
        </I18nextProvider>
        </MemoryRouter>
    );
}