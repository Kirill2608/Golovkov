/*
describe('Autoriz form', () => {
    beforeEach(() => {
      cy.visit('https//dssvsv');
    });
    it('Select form', () => {
      cy.get('#day').select('25');
      cy.get('#month').select('дек');
      cy.get('#year').select('1991');

      cy.get('#day').invoke('val').should('eq','25');
      cy.get('#month').invoke('val').should('eq','12');
      cy.get('#day').select('1991');
    })
    }
)

describe('Авторизация',() => {
    
    before(() => {
        cy.log('before');
    });
    after(() => {
        cy.log('after');
    });
    beforeEach(() => {
         cy.visit('web...');
    });
    afterEach(() => {
        cy.log('afterEach');
    });
    
    it('Поле емейл', () => {
        cy.get('локатор').type('вводимый текст')
    }) 
})
*/


//Home task 9
//Напишите тест на окно Авторизации https://www.beaxy.com/

describe('Autorithation', () => {
    it('login', () => {
        cy.viewport(1600,900);
        cy.visit(' https://www.beaxy.com/');
        cy.get('span.header-btn__login',{ timeout: 10000 }).click();
        cy.get('#popUp-login-email').type('filho@mail.ua');
        cy.get('#popUp-login-password').type('1234Qwer%');
        cy.get('#login-checkbox').click();
        cy.get('.popUp-form-token-btn>button').click();

    })
})

/*
//Напишите тест на страницу careers https://www.beaxy.com/careers/ , 
//где будут проверены все заголовки h1/h2/h3 на странице

describe('Headers', () => {
    it('Check headers', () => {
    cy.visit('https://www.beaxy.com/careers/');
    cy.get('h1.career-header__title').should('text', " Join a global team working on the future of finance");
    cy.get('h2.career-body__title').should('text', " Why join Beaxy?");
    cy.get('.body-content >div:first-child h3').should('text', " Bridge gaps");
    cy.get('.body-content div:nth-child(2) h3').should('text', " Connect globally");
    cy.get('.body-content div:nth-child(3) h3').should('text', " Build powerfully");
    cy.get('.body-content div:nth-child(4) h3').should('text', " Value driven");
    cy.get('.body-content div:nth-child(5) h3').should('text', " Opportunities for everyone");
    cy.get('.body-content div:nth-child(6) h3').should('text', " Empowering freedom");
    cy.get('h2.career-footer__title').should('text', " Want to be part of our team?");
    })
}) 


//Напишите тест на страницу блог https://www.beaxy.com/blog/ , где необходимо проверить первый пост. 
// (наличие картинки и названия поста)
describe('blog',() => {
    it('first post',() => {
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/blog/');
        //var1
        cy.get('div.entry-contents h2').should('text', "Introduction to Bitcoin, Cryptocurrency, and Crypto Markets");
        //var2
        cy.get('div.entry-contents>div:first-child h2').should('text', "Introduction to Bitcoin, Cryptocurrency, and Crypto Markets")
        cy.get("[alt*='Cryptocurrency']",{timeout:3000}).should('have.attr', 'src', '/images/pages/pageIntroduction/introduction.jpg');
    })
}
*/

/*
//Home task 10

describe('Calculator',() => {
    it('Value output',() => {
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.get('[data-active-crypto="BTCUSDC"]').click();
        cy.get('[data-name="ETC"]').click();
        cy.get('[placeholder="Enter amount"]').clear().type('33');
        cy.get('span.widget__output-data').should('text', "30603.72809051");
        cy.get('[data-active-crypto="ETCBTC"]').click();
        cy.get('[data-name="ZEC"]').click();
        cy.get('[placeholder="Enter amount"]').clear().type('66');
        cy.get('span.widget__output-data').should('text', "23783.78378378");
        //cy.get('.cacl-btn-name-crypto').click();
    })
})
*/