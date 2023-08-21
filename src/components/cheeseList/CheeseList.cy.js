import CheeseList from "./CheeseList";

describe("Cheeselist displays cheeseslistitems components", () => {
    it("displays the short cheese details for the given cheese id", () => {
        cy.intercept("GET", "/api/cheeses/type/hard", [
            {
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
            {
                id: 2,
                name: "Gruyere",
                description:
                    "A hard yellow cheese made from cows milk, named after the town of Gruyères in Switzerland. It is sweet but slightly salty, with a flavour that varies widely with age. It is often described as creamy and nutty when young, becoming with age more assertive, earthy, and complex. When fully aged (five months to a year) it tends to have small cracks that impart a slightly grainy texture.",
                type: "Hard",
                flavour: "Salty",
                family: "Gruyere",
                aromas: "Salty",
                region: "Gruyere",
                countries: "Switzerland",
                milks: "Cow",
                vegetarian: "Yes",
                image: "https://i.imgur.com/0x1XH4k.jpeg",
            },
        ]).as("getCheeses");
        cy.mount(<CheeseList />);
        cy.wait("@getCheeses");
        cy.get("[data-cy=cheeseShortDescription]").should(
            "contain",
            "This is a test cheese description. This is a test cheese description.This is a test cheese descripti..."
        );
    });
});
