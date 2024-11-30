import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nJustTest from "../../../config/i18n/i18nJustTest";
import { ReactNode } from "react";

export function renderWithTranslation (component:ReactNode) {

    return render(
        <I18nextProvider i18n={i18nJustTest}>
            {component}
        </I18nextProvider>
    );
}
