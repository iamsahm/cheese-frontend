import { MemoryRouter } from "react-router-dom";
import NavigationBar from "./Navigation";

describe("Navigation bar", () => {
    it("has links for homepage, sign in and log out", () => {
        cy.mount(
            <MemoryRouter>
                <NavigationBar />
            </MemoryRouter>
        );
        cy.get("[data-cy=home]")
            .should("contain", "Brielievers")
            .click()
            .url()
            .should("include", "/");
        cy.get("[data-cy=signin]")
            .should("contain", "Sign In")
            .should("have.attr", "href", "/login");
        cy.get("[data-cy=logout]")
            .should("contain", "Logout")
            .should("not.have.attr", "href", "#undefined");
        cy.get("[data-cy=cheese-menu]").should("contain", "Hard");
    });
});
