import toolBar from "../base/toolBar";

/// <reference types = 'Cypress'/>

describe('Toolbar', () => {
 
    before(() => {
      cy.visit('http://autopract.com');
      cy.viewport(1200, 900);
      cy.wait(2000);
      cy.get('[aria-label="Close"]', {timeout: 5000}).click();
     });

     it('open page beauty', () => {
        toolBar.openPageOnSelectionHome('beauty')
    });

    it('open page left sidebar', () => {
        toolBar.openPageOnSelectionShop('left')
    });

    it('open page product', () => {
        toolBar.openPageOnSelectionProducts('product')
    });

    it.only('open page services', () => {
        toolBar.openPageOnSelectionFeatures('two')
    });

  });