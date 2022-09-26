/*
describe('beaxy', () => {
    it('test-1', () => {
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/buy-sell/');
        cy.get('h1').invoke('text').then((res) => {
            cy.log(res);
            expect(res).to.be.equal('njfjnfjnrjcnjrcjrn');
        })
    }) 

    it('test-2', () => {
        cy.visit('https://www.beaxy.com/buy-sell/');
        cy.get('h1').then((result) => {
            const pageText = result.text();
            cy.log(pageText);
            expect(pageText).to.be.equal('njfjnfjnrjcnjrcjrn');
        })
    })

    it('test-3', () => {
        cy.visit('https://www.beaxy.com/buy-sell/');
        cy.get('h1').then((result) => {
            return result.text();
        }).as('text');
        cy.get('@text').should('eq', 'ghggvhgvjhjhgjh')
})


it.only('test-4', () => {
    cy.visit('https://www.beaxy.com/register/');
    cy.get('[class="popUp-form-custom-checkbox _valid-input"]').click().should('be.checked')

})
})
*/

//Домашка
/*
describe('shop', () => {
    it('add to card', () => {
        cy.viewport(1200,900);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.wait(10000);
        cy.get('[class*="buttonnext1749291004__c"]').should('be.visible').click();
        cy.wait(10000);
        cy.get('[data-hook="cart-widget-name"]').should('have.value', 'Croc Clutch');
        cy.get('.product-quantity-container a').should('have.attr', 'fm-parent', '1');
    })
})
*/

describe('multiplex social networks', () => {
    beforeEach(() => {
        cy.visit('https://friends.multiplex.ua/login');
    })
    it('google', () => {
        cy.get('[href="https://auth2.multiplex.ua/galogin"]').should('be.visible').click();
        cy.get('[head base]').should('have.attr', 'href', 'https://accounts.google.com/')
    })

    it('facebook', () => {
        cy.get('[class="wrapper-icon-open-id"]:not([id="google-signin-button"]').should('be.visible').click();
        cy.get('[h1 a]').should('have.attr', 'href', 'https://www.facebook.com/');
    }) 

    it.only('apple', () => {
        cy.get('[href="https://auth2.multiplex.ua/aplogin"]').should('be.visible').click();
        cy.get('[head title]').should('have.text', 'Вход в систему с Apple ID');
    }) 
})
