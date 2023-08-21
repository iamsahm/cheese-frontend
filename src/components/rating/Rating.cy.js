import RatingComponent from "./Rating";

const cheeseId = "64db5af7ee3a0c2443b91488"

describe("RatingComponent", () => {
    it("It should  display meanRating", () => {
        const meanRating = 4.5
        cy.intercept('GET', `/api/ratings/${cheeseId}`, {
            statusCode: 200,
            body: { meanRating }
        }).as('fetchMeanRating')
        cy.mount(<RatingComponent cheeseId={cheeseId}/>)
        cy.wait('@fetchMeanRating')
        cy.contains(`Average rating: ${meanRating}`).should('be.visible');
    });

    it('displays message for unrated cheese', () => {
        cy.intercept('GET', '/api/ratings/your-cheese-id', {
            statusCode: 404,
            body: { message: 'This cheese is yet to be rated!' },
        }).as('fetchMeanRating');

        cy.mount(<RatingComponent cheeseId="your-cheese-id" />);
        cy.wait('@fetchMeanRating');

        cy.contains('This cheese is yet to be rated!').should('be.visible');
    });
    }) 
