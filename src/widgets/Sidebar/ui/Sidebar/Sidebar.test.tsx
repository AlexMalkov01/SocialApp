import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "shared/lib/Tests/renderWithTranslation/renderWithTranslation";
import { ComponentRander} from "shared/lib/Tests/componentRander/componentRander";


describe("Sidebar", () => {
    test("test only 2" , () => {
        ComponentRander(<Sidebar/>);
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
    });
 });