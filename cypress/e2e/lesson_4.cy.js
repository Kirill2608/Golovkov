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
Comments: 
1) Тут мы снова столкнулись с особенностями cypress он немного подругому работает с iframes, 
если ты внимательно посмотришь в дом, то заметишь что вся cart widget находится в iframe.
Можно было сдлеать вот так, но вы еще не проходили, сегодня возможно вам немного  Стас расскажет:

it('AddCard', () => {
        cy.viewport(1600,900);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.wait(6000);
        //Добавьте товар через кнопку add to card
        cy.get('[data-hook="add-to-cart"]').wait(2000).click();
        //Получить iframe
        cy.get('iframe')
        .then(($iframe) => {
          const $body = $iframe.contents().find('body');
          //Проверить что миникарт есть
          const miniCart = cy.wrap($body).find('.minicart');
          expect(miniCart).to.exist;
          //Взять cart-widget-name и его текст проверить что товар называется корректно
          cy.wrap($body).find('[data-hook="cart-widget-name"]').then((el) => {
            expect(el.text()).to.be.equal(' Croc Clutch ');
          })
        })
      });


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


/*Comments:
1) Вижу что у тебя такая же проблема с кросс 
The following error originated from your application code, not from Cypress. It was caused by an unhandled promise rejection.
У cypress есть особенность они не совсем поддерживают кросс навигацию, для того чтобы это поддержать есть эксперимент 
experimentalSessionAndOrigin: true, его нужно добавить в cypress.config.js. в раздел module.exports = defineConfig({}):
на лекции рассмотрите некоторые варианты.
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
