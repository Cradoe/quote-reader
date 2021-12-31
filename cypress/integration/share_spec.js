
describe( 'share', () => {
    it( 'user can share to whatsapp', () => {
        // visit site 
        cy.visit( '/' );


        // click share widget
        const widget = cy.findAllByRole( 'button', { name: /share widget/i } ).first();
        widget.scrollIntoView().click();

        // click share to web.whatsapp 
        cy.get( 'a[href*="web.whatsapp"]' ).click()

    } );
} );

describe( 'share', () => {
    it( 'user can share via SMS', () => {
        // visit site 
        cy.visit( '/' );


        // click share widget
        const widget = cy.findAllByRole( 'button', { name: /share widget/i } ).first();
        widget.scrollIntoView().click();

        // click share to sms
        cy.get( 'a[href*="sms"]' ).click()

    } );
} );