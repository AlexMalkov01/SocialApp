import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "shared/lib/Tests/renderWithTranslation/renderWithTranslation";


describe("Sidebar", () => {
    test("test only 2" , () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
    });
 });