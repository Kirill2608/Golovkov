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