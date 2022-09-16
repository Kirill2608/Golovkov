describe('window signal', () => {
    /*it('passes', () => {
        cy.visit('https://facebook.com/');
       // cy.get('h2').invoke('text').should('eq',"");
       cy.get('[name="email"]').type('dfgfgdf');
       cy.get('[name="pass"]').type('33767836');
       cy.get('[name="pass"]').invoke('val').should('eq',"33767836");
       //cy.get('[data-testid=royal_login_button]').click
    }); */
      it('inn',() => {
        cy.visit('http://decode.org.ua/inn');
        cy.get('input#numberInn').type('3050310087');
        cy.get('input[type="submit"]').click();
        cy.get('.f td.i img').should('have.attr', 'src', '/images/ok.png');
      })
  });