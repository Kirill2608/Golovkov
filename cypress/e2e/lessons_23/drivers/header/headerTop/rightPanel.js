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