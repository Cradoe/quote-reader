it( "has anchor tags using cy.get and .each", {
    defaultCommandTimeout: 10000
}, () => {
    cy.visit( "/" );
    cy.get( "a:contains(#)" ).each( $a => {
        const message = $a.parent().parent().text();
        expect( $a, message ).to.have.attr( "href", "#" );
    } );
} );