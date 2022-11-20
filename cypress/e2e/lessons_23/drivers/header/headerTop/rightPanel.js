/*
Comments:

login () {
        cy.get(selectors.login).should('be.visible').click();
        cy.get(selectors.loginEmail).should('be.visible').eq(0).click();
        cy.get(selectors.inputEmail).should('be.visible').type('testtestov@i.ua').should('value','testtestov@i.ua');
        cy.get(selectors.inputPass).should('be.visible').type('380509876544').should('value','380509876544');
        cy.get(selectors.buttonSubmit).should('be.visible').click();
    }
    
 1) у тебя получились парфметры захардкоджены, так не делай, все параметры если они меняются должны передаваться через метод/функцию.
 2) еще я бы разнесла на несколько методов потому что можно было бы покрыть больше одного кейса:
      0. мог бы быть кейс просто проверки навигации отдельным методом - cy.get(selectors.login).should('be.visible').click();
      1. проверка ввода имейла может быть отдельным методом, потому что ты можешь проверять как негативные так и позитивные кейсы
      2. проверка ввода пароля тоже может быть отдельным методом и быть как негативным так и позитивным сценарием
      3. можно было бы вынести или в кастомные команды или отдельным методом и сделать его более уникальным, 
      так как сабмит кнопок но с разными локаторами может быть больше одной
      
      Итог: и потом реализовать отдельный метод который будет у тебя вызывать набор методов которые будут делать логин 
      login(email, pass, phone) {
      this.openLoginDialog(); //  - тут ты можешь обращаться через this. у тебя метод принадлежит классу   
      this.typeEmail(email);
      this.typePassword(pass);
      this.typePhone(phone);
      this.clickOnSubmitButton();  -  или кастомный вызов команды
      }
      
3) Обрати внимание! Ты назвал класс login. а в нем и фейворит и навигация в карту, в таких случаях ищи более удачное название,
так как можно подумать там только логин значит я еще отдельно добавлю фейворит и навигацию, класс это общее чтоо объединяет 
4) Так же принято называть папки маленькими буквами без пробелов даже если это два слова - это просто красиво и по правилам

*/

const selectors = {
login: '#profile_desktop button',
loginEmail: '.checkout-button-main-l--login',
inputEmail: '#login',
inputPass: '#password',
buttonSubmit: '[type="submit"]',
favorites: '.js-favorites_desktop',
cart: '.middle_block #cart',
favorites: '.js-favorites_desktop',
cart: '.middle_block #cart'
}

class login {
    login () {
        cy.get(selectors.login).should('be.visible').click();
        cy.get(selectors.loginEmail).should('be.visible').eq(0).click();
        cy.get(selectors.inputEmail).should('be.visible').type('testtestov@i.ua').should('value','testtestov@i.ua');
        cy.get(selectors.inputPass).should('be.visible').type('380509876544').should('value','380509876544');
        cy.get(selectors.buttonSubmit).should('be.visible').click();
    }

    goToFavorite() {
        cy.get(selectors.favorites).click();
        cy.location('pathname', {timeout: 4000}).should('include', '/profile/favourites');
    }

    navigateToCart() {
        cy.get(headerSelectors.cart).click();
        cy.location('pathname', {timeout: 4000}).should('include', '/cart/consistence');
    }
}module.exports = new login()
