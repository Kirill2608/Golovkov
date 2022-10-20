///<reference types= "Cypress"/>


describe('gorest.co.in', () => {
    it('test1', () =>{
        cy.visit('https://dmitripavlutin.com/javascript-object-destructuring/')
        cy.wait(3000)
        cy.scrollTo('bottom')
        cy.linkSearch2('facebook.com/sharer/')
    })
})