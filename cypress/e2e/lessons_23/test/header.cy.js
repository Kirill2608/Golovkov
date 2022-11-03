/// <reference types = 'Cypress'/>

import mainPage from '../drivers/mainpage/mainpage';
import productsCatalog from '../drivers/header/headerMiddle/productcatalog/productcatalog';
import headers from '../drivers/header/headerBottom/sale/sale'
import login from '../drivers/header/headerTop/rightPanel'
import rightPanel from '../drivers/header/headerTop/rightPanel';


describe('Add product to card from sale', () => {
 
  before(() => {
    cy.visit('https://parfums.ua/');
    cy.viewport(2250, 1900);
    cy.wait(2000);
   });

  it('goToSale', () => {
    headers.navigateToSale();
  });

  it('goToPromo', () => {
    headers.navigateToPromo();
  });

  it.only('goToFavorite', () => {
    rightPanel.login();
    cy.wait(3000);
    login.goToFavorite();
  });

  it.skip('goToFavorite', () => {
    productsCatalog.addProductToCart();   
  });
});