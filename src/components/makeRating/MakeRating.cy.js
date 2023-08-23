import MakeRating from "./MakeRating"

const cheeseId = "64db5af7ee3a0c2443b91488"

describe("MakeRating Component", () => {
    beforeEach(() => {
        cy.intercept('GET', `/api/ratings/${cheeseId}`, {
            statusCode: 200,
        }).as('ratingcheese');
    });

    it("displays the rating form correctly when logged in", () => {
        cy.window().then((win) => {
            win.localStorage.setItem("token", "faketoken");
        });
        cy.mount(<MakeRating cheeseId={cheeseId} handleAddRating={() => {}} />);

        cy.get("#rating-input").should("exist"); 
        cy.get("button").contains("Submit Rating").should("exist");
    });

    it("displays message ou need to be logged in to rate a cheese when not logged in", () => {
        cy.window().then((win) => {
            win.localStorage.removeItem("token");
        });
        cy.mount(<MakeRating cheeseId={cheeseId} handleAddRating={() => {}} />);

        cy.contains("You need to be logged in to rate a cheese").should("exist");
    });

});
