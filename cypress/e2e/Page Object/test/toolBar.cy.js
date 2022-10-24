import toolBar from "../base/toolBar";

/// <reference types = 'Cypress'/>

describe('Toolbar', () => {
 
    before(() => {
      cy.visit('http://autopract.com');
      cy.viewport(1200, 900);
      cy.wait(2000);
      cy.get('[aria-label="Close"]', {timeout: 5000}).click();
     });

     it('open page home/beauty', () => {
        toolBar.openPageOnSelectionHome('beauty')
    });

    it('open page shop/ left sidebar', () => {
        toolBar.openPageOnSelectionShop('left')
    });

    it('open page products/ bundle product', () => {
        toolBar.openPageOnSelectionProducts('product')
    });

    it('open page feature/ portfolio/ portfolio grid 2', () => {
        toolBar.openPageOnSelectionFeatures('2')
    });

    it('open page pages/ account /cart', () => {
        toolBar.openPageOnSelectionPages('cart')
    });

    it.only('open page blogs/ no sidebar', () => {
        toolBar.openPageOnSelectionBlogs(' no sidebar ')
    });

  });