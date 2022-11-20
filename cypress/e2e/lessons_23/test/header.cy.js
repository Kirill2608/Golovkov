
/*
Comments:
1) у тебя напутаны импорты, потому что и класс и метод имеют одно и тоже название при этом имя файла вообще другое
import login from '../drivers/header/headerTop/rightPanel'
import rightPanel from '../drivers/header/headerTop/rightPanel';

соответственно, эта дубликация будет есть больше ресурсов, за импортами нужно смотреть аккуратно, они влияют при сборке на размер файла
 
по факту тебе только на до сделать импорт класс с именем login 
import login from '../drivers/header/headerTop/rightPanel'
и починить тест.   rightPanel.login(); => login.login() как результат повторении и выглядит так себе,
поэтому лучше называй лучше классы в которых у тебя хранятся методы , думай как о блоках, дели страницу на блоки,
а блоки в себе могут иметь элементы к которым достучаться ты можешь через методы

 it.only('goToFavorite', () => {
    rightPanel.login();
    cy.wait(3000);
    login.goToFavorite();
  });

*/



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
