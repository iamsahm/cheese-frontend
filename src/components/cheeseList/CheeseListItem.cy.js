import CheeseListItem from "./CheeseListItem";
import { MemoryRouter, Routes, Route } from "react-router";

describe("Cheese list results display", () => {
    beforeEach(() => {
        cy.intercept("GET", "/api/cheeses/1", {
            statusCode: 200,
            body: {
                id: 1,
                name: "Cheddar",
                description:
                    "A hard, sharp cheese with big chunky crystals made in Somerset in England. It is a hard and natural cheese that has a slightly crumbly texture if properly cured and if it is too young, the texture is smooth. It gets a sharper taste as it matures, over a period of time between 9 to 24 months. ",
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

    it("displays the short cheese details for the given cheese id", () => {
        cy.mount(
            <MemoryRouter initialEntries={["/cheeses/1"]}>
                <Routes>
                    <Route path="/cheeses/:id" element={<CheeseListItem />} />
                </Routes>
            </MemoryRouter>
        );

        cy.get("h1").should("contain", "Cheddar");
        cy.get("[data-cy=cheeseShortDescription]").should(
            "contain",
            "A hard, sharp cheese with big chunky crystals made in Somerset in England. It is a hard and natural ..."
        );
        cy.get("[data-cy=cheeseRegionCountry]").should(
            "contain",
            "Somerset: England"
        );
    });
    it("displays a 404 if the id doesn't exist", () => {
        cy.mount(
            <MemoryRouter initialEntries={["/cheeses/2"]}>
                <Routes>
                    <Route path="/cheeses/:id" element={<CheeseListItem />} />
                </Routes>
            </MemoryRouter>
        );
        cy.get("h1").should("contain", "404 error, cheese not found! ");
    });
});
