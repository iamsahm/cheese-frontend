import { RandomCheese } from "./RandomCheese";
import { useNavigate } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

describe("RandomCheese", () => {
    it("renders a random cheese", () => {
        cy.intercept("GET", "/api/cheeses/random", {
            statusCode: 200,
            body: {
                id: 1,
                name: "Cheddar",
                description: "A hard, sharp cheese",
                type: ["Hard"],
                flavour: "Sharp",
                family: "Cheddar",
                aromas: ["Sharp"],
                region: "Somerset",
                countries: ["England"],
                milks: ["Cow"],
                vegetarian: "Yes",
                image: "https://i.imgur.com/0x1XH4k.jpeg",
            },
        }).as("getCheese");
        cy.mount(
            <MemoryRouter>
                <RandomCheese />
            </MemoryRouter>
        );
        cy.wait("@getCheese");
        cy.get('[data-cy="description"]').should(
            "contain",
            "A hard, sharp cheese"
        );
    });
});
