
describe( 'copy on homepage', () => {
    it( 'user can copy to clipboard', () => {

        // visit site 
        cy.visit( '/' );
        // click copy button 
        cy.findAllByRole( 'button', { name: /Copy to clipboard/i } ).first().scrollIntoView().click();

    } );
} );

describe( 'copy on quotes page', () => {
    it( 'user can copy to clipboard', () => {

        // visit site 
        cy.visit( '/quotes' );
        // click copy button 
        cy.findAllByRole( 'button', { name: /Copy to clipboard/i } ).first().scrollIntoView().click();

    } );
} );