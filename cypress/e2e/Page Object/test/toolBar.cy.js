import toolBar from "../base/toolBar";
import burger from "../base/toolBar"

/// <reference types = 'Cypress'/>

describe('Toolbar', () => {
 
    before(() => {
      cy.visit('http://autopract.com');
      cy.viewport(1280, 1024);
      cy.wait(3000);
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

    it('open page blogs/ no sidebar', () => {
        toolBar.openPageOnSelectionBlogs(' no sidebar ')
    });

    it.only('burger menu', () => {
        burger.buttonOpenBurgerMenu.should('be.visible').click();
        burger.burgerMenu.should('be.visible');
        //burger.buttonOpenSubMenuBags.trigger('mouseenter')
        burger.buttonOpenSubMenuBags.should('be.visible').click();
        burger.bergerSubMenuBags.invoke('show').should('be.visible');
        burger.buttonBergerMenuBack.should('be.visible').click().should('be.hidden');
    })

  });