import IndividualCheeseComponent from "./IndividualCheese";
import { MemoryRouter, Routes, Route } from "react-router";

describe("Individual cheese component", () => {
    beforeEach(() => {
        cy.intercept("GET", "/api/cheeses/1", {
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
    });

    it("displays the cheese details for the given cheese id", () => {
        cy.mount(
            <MemoryRouter initialEntries={["/cheeses/1"]}>
                <Routes>
                    <Route
                        path="/cheeses/:id"
                        element={<IndividualCheeseComponent />}
                    />
                </Routes>
            </MemoryRouter>
        );

        cy.get("h4").should("contain", "Cheddar");
    });
    it("displays a 404 if the id doesn't exist", () => {
        cy.mount(
            <MemoryRouter initialEntries={["/cheeses/2"]}>
                <Routes>
                    <Route
                        path="/cheeses/:id"
                        element={<IndividualCheeseComponent />}
                    />
                </Routes>
            </MemoryRouter>
        );
        cy.get("h1").should("contain", "404 error, cheese not found! ");
    });
});
