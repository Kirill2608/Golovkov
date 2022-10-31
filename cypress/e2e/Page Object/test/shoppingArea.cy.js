/// <reference types = 'Cypress'/>
import toolBar from "../base/toolBar";
import shoppingArea from "../base/shoppingArea"


describe('add to card', () => {
    beforeEach(() => {
        cy.visit('http://autopract.com');
        cy.viewport(2048, 1152);
        cy.wait(3000);
        cy.get('[aria-label="Close"]', {timeout: 5000}).click();
       });

    it('add products/three column and check', () => {
        toolBar.openPageOnSelectionProducts('three olumn');
        cy.wait(3000);
        shoppingArea.buttonQuantityPlus.click();
        shoppingArea.buttonAddToCard.click();
        cy.wait(3000);
        //cy.get('.cart-section a').contains('Trim Dress')
        shoppingArea.checkProductsOnCard('Trim Dress')
        //cy.get('input[name="quantity"]').should('have.have.attr', 'ng-reflect-model', '2')
        shoppingArea.numberOfProducts.should('have.have.attr', 'ng-reflect-model', '2')
    })
})