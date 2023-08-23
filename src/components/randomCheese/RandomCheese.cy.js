// import { MemoryRouter, Routes, Route } from "react-router";
import { useNavigate } from "react-router-dom";
import { RandomCheese } from "./RandomCheese";

describe("RandomCheese", () => {
    it("renders correctly", () => {
        cy.intercept("GET", "/api/cheeses/random", {
            statusCode: 200,
            body: {
                id: 1,
                name: "Cheddar",
                description: "A hard, sharp cheese",
                type: "Hard",
                flavour: "Sharp",
                family: "Cheddar",
                aromas: "Sharp",
                region: "Somerset",
                countries: "England",
                milks: "Cow",
                vegetarian: "Yes",
                image: "https://i.imgur.com/0x1XH4k.jpeg",
            },
        }).as("getCheese");
        cy.mount(<RandomCheese navigate={useNavigate()} />);
        cy.wait("@getCheese");
        cy.get("h1").should("contain", "Random Cheese");
        cy.get("img").should("be.visible");
        cy.get("img").should(
            "have.attr",
            "src",
            "https://i.imgur.com/0x1XH4k.jpeg"
        );
        cy.get("h4").should("contain", "Cheddar");
        cy.get("[data-cy=cheesetype]").should("contain", "Cheese Type:");
        cy.get("[data-cy=cheeseactualtype]").should("contain", "Hard");
        cy.get("[data-cy=description]").should(
            "contain",
            "A hard, sharp cheese"
        );
        cy.get("[data-cy=flavour]").should("contain", "Sharp");
        cy.get("[data-cy=region]").should("contain", "Somerset");
        cy.get("[data-cy=countries]").should("contain", "England");
        cy.get("[data-cy=milks]").should("contain", "Cow");
        cy.get("[data-cy=vegetarian]").should("contain", "Yes");
    });
});
