import CheeseListItem from "./CheeseListItem";

describe("CheeseListItem", () => {
    const mockCheese = {
        name: "Test Cheese",
        description:
            "This is a test cheese description. This is a test cheese description.This is a test cheese description.This is a test cheese description.This is a test cheese description.This is a test cheese description.It has more than 100 characters...",
        region: "Test Region",
        countries: ["Test Country"],
        image: "test-image.jpg",
        cheeseId: "test-cheese-id",
    };

    it("renders cheese details correctly", () => {
        cy.mount(<CheeseListItem cheese={mockCheese} />);
        cy.get("h1").should("contain", mockCheese.name);
        cy.get("[data-cy=cheeseShortDescription]").should(
            "contain",
            "This is a test cheese description. This is a test cheese description.This is a test cheese descripti..."
        );
        cy.get("[data-cy=cheeseRegion]").should(
            "contain",
            "Test Region"
        );
        cy.get("[data-cy=cheeseCountry]").should(
            "contain",
            "Test Country"
        );
        cy.get("img").should("have.attr", "src", mockCheese.image);
        cy.get("[data-cy=idlink]").should(
            "have.attr",
            "href",
            "/cheeses/test-cheese-id"
        );
    });
});
