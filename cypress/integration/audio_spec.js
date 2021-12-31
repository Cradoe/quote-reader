
describe( 'play on landing page', () => {
    it( 'user can load and play audio', () => {
        // visit site 
        cy.visit( '/' );

        // click copy button 
        cy.findAllByRole( 'button', { name: /load audio/i } ).first().scrollIntoView().click();

    } );
} );

describe( 'play on quote page', () => {
    it( 'user can go to quotes page and play audio', () => {
        // visit site 
        cy.visit( '/quotes' );

        // click copy button 
        cy.findAllByRole( 'button', { name: /load audio/i } ).first().scrollIntoView().click();

    } );
} );