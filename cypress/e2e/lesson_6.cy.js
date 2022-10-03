//для того чтоб все команды были видны в сплывающих окнах
///<reference types = "Cypress"/> 
// import { faker } from '@faker-js/faker'
// import { invoke } from 'cypress/types/lodash';


// const randomEmail = faker.internet.email();
//     const randomName = 'AutomationTest' + faker.name.fullName();
//     const randomLastName = faker.name.lastName();
//     const id = faker.datatype.uuid();
//     const img = faker.image.avatar();
//     // data
//     // bithday
//     // password
//     const arr = faker.helpers.arrayElement(['free','toy','length'])

/*
describe('sdsd',() => {
    

    before(() => {
        cy.visit('');
        cy.viewport(1200,900);
    });
    it(() => {
        cy.get('');
        cy.screenshot();
    })
    it(() => {
        cy.get('').screenshot();
    })
    cy.get('[onclick="myFunction()"]').click();
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Press aqweqwe')  // проверкав сплывающих алертов в браузере
        });

    it('Drag and drop', => {
        cy.get('jdjjdvnv').drag('kdfjkdf');
    })    
})
*/

// describe('lesson',() => {
//     it('UI-Test', () => {
//         cy.viewport(1200,900);
//         cy.visit('https://mui.com/material-ui/react-slider/').scrollTo(0,500);
//         cy.wait(5000);
//         cy.get('.css-5wk36y.css-5wk36y')
//         .invoke('attr','style','left: 0%; width: 99%;')
//         .should('attr','style','left: 0%; width: 99%;')
//         cy.get('.MuiSlider-root span:nth-child(3)')
//         .invoke('attr','style','left: 99%;')
//         cy.get('.MuiSlider-root input')
//         .invoke('attr','aria-valuenow', '99')
//         .invoke('attr', 'value', '99')
//     });
//     })



    //Домашка

    describe('react-slider',() => {
        beforeEach(() => {
            cy.viewport(1200,900);
            cy.visit('https://mui.com/material-ui/react-slider/').scrollTo(0,2000);
            cy.wait(5000);
        })
        it('Small steps', () => {
            cy.get('#demo-rniqxmzdv0b span span:nth-child(2)')
            .invoke('attr', 'style', 'left: 0%; width: 90%;')
            .should('attr', 'style', 'left: 0%; width: 90%;');
        })
        })