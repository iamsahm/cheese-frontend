import IndividualCheeseComponent from "./IndividualCheese";
import { MemoryRouter, Routes, Route } from "react-router";

describe("Individual cheese component", () => {
    it("displays the cheese details for the given cheese id", () => {
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

        // make sure the component is rendered with the correct props
        // check that the component makes a call to the correct endpoint
        // check that the component makes a call with the correct method
        // check that the component makes a call with the correct headers
        // check that the component makes a call with the correct body
        // check that the component makes a call with the correct query string
        // check that the component makes a call with the correct url
        // check that the component makes a call with the correct status code
        // check that the component makes a call with the correct response body
        cy.get("h1").should("contain", "Cheddar");
    });
});

// check that the component displays the correct cheese details
