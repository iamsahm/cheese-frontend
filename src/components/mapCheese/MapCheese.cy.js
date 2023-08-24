import { MemoryRouter } from 'react-router';
import MapCheese from './MapCheese'

describe('MapCheese Component', () => {
    beforeEach(() => {
        cy.intercept("GET", "/api/cheeses/all", {
            statusCode: 200,
            body: [
                {
                "cheeseId": "64db5af1ee3a0c2443b9147d",
                "name": "Zamorano",
                "type": ["hard"],
                "flavour": "nutty",
                "family": "",
                "aromas": ["sweet"],
                "region": "Castilla-Leon, Zamora",
                "countries": ["Spain"],
                "milks": ["sheep"],
                "image": "https://cheese.com/media/img/cheese/Zamorano-cheese.jpg",
                "vegetarian": false
                },
            ]
        }).as("getCheese");
    });

    it('displays markers for cheeses', () => {
        cy.mount(
        <MemoryRouter>
            <MapCheese/>
        </MemoryRouter>
    );
        cy.wait("@getCheese");
        cy.get('.gm-style').should('exist');
        cy.get('.gm-style') 
        .click({ force: true }); 
    });

    // it('displays InfoWindow when marker is clicked', () => {
    //     cy.mount(
    //         <MemoryRouter>
    //             <MapCheese />
    //         </MemoryRouter>
    //     );
    //     cy.wait("@getCheese");
    //     cy.get('.gm-style').click({ force: true });
    //     cy.get('.gm-style .gm-style-iw').should('exist');
    // });


})

//     it('opens info window when marker is clicked', () => {
//         cy.mount(
//             <MemoryRouter>
//                 <MapCheese/>
//             </MemoryRouter>
//         );
//         cy.wait("@getCheese");
//         cy.get('[Marker]').first().click();
//         cy.get('[data-cy="info-window"]').should('exist');
//         cy.contains('Zamorano').should('exist');
//     });
// });

    // it('navigates to individual cheese page when marker link is clicked', () => {
    //     cy.intercept('/api/cheeses/all', { fixture: 'cheeses.json' }); // Mock the API response
    //     mount(<MapCheese/>);
        
    //     cy.get('[data-cy="cheese-marker"]').first().click();
    //     cy.get('[data-cy="cheese-link"]').click();
    //     cy.url().should('include', '/cheeses/');
    // });



// describe('MapCheese Component', () => {
//     beforeEach(()=> {
//         cy.visit('/map');
//     });

//     it('displays markers for cheeses', () => {
//         cy.get('[data-cy="map"]').should('exist'); 
//         // Replace with the appropriate data-cy attribute on the GoogleMap component
//         cy.get('[data-cy="cheese-marker"]').should('have.length', 10);
//          // Adjust the number as needed based on your test data
//     });

//     it('opens info window when marker is clicked', () => {
//         cy.get('[data-cy="cheese-marker"]').first().click();
//         cy.get('[data-cy="info"]').should('exist'); 
//         cy.contains('Okanagan Double Cream Camembert Name').should('exist');
//          // Replace 'Cheese Name' with the actual name of the cheese
//     });

//     it('navigates to individual cheese page when marker link is clicked', () => {
//         cy.get('[data-cy="cheese-marker"]').first().click();
//         cy.get('[data-cy="link"]').click(); 
//         // Replace with the appropriate data-cy attribute on the cheese link
//         cy.url().should('include', '/cheeses/64db5b35ee3a0c2443b9151a');
//          // Make sure this URL pattern is correct
//     })
// });
