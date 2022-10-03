//Домашка 

describe('react-slider',() => {
    beforeEach(() => {
        cy.viewport(1200,900);
        cy.visit('https://mui.com/material-ui/react-slider/');
    })
    it('Small steps', () => {
        cy.scrollTo('0%','20%');
        cy.wait(3000);
        cy.get('#main-content div:nth-child(12) div:nth-child(2) [class^="MuiSlider-track"]').should('be.visible')
        .invoke('attr', 'style', 'left: 0%; width: 93.3333%;')
        .should('attr', 'style', 'left: 0%; width: 93.3333%;');
        cy.get('#main-content div:nth-child(12) div:nth-child(2) [data-focusvisible]').should('be.visible')
        .invoke('attr','style','left: 93.3333%;')
        .should('attr','style','left: 93.3333%;');
        // cy.get('#main-content div:nth-child(12) div:nth-child(2) [data-index="14"]')
        // .invoke('attr','style','left:93.33333333333334%')
        // .should('attr','style','left:93.33333333333334%');
        // cy.get('#main-content div:nth-child(12) div:nth-child(2) input')
        // .invoke('attr','aria-valuenow','9e-8')
        // .invoke('attr', 'aria-valuetext', '9e-8°C')
        // .invoke('attr','value','9e-8')
    });

    it('Custom marks',() => {
        cy.scrollTo('0%','20%');
        cy.wait(3000);
        cy.get('#main-content div:nth-child(14) div:nth-child(2) div span span:nth-child(2)').should('be.visible')
        .invoke('attr', 'style', 'left: 0%; width: 100%;')
        .should('attr', 'style', 'left: 0%; width: 100%;');
        cy.get('#main-content div:nth-child(14) div:nth-child(2) div span span:nth-child(11)').should('be.visible')
        .invoke('attr', 'style', 'left: 100%;')
        .should('attr', 'style', 'left: 100%;');
    });

    it('Range slider', () => {
        cy.scrollTo('0%','40%');
        cy.wait(3000);
        cy.get('#main-content div:nth-child(20) [class^="MuiSlider-root"] span:nth-child(3)').should('be.visible')
        .invoke('attr', 'style', 'left: 0%;')
        .should('attr', 'style', 'left: 0%;');
        cy.get('#main-content div:nth-child(20) [class^="MuiSlider-track"]').should('be.visible')
        .invoke('attr', 'style', 'left: 0%; width: 100%;')
        .should('attr', 'style', 'left: 0%; width: 100%;');
        cy.get('#main-content div:nth-child(20) [class^="MuiSlider-root"] span:nth-child(4)').should('be.visible')
        .invoke('attr', 'style', 'left: 100%;')
        .should('attr', 'style', 'left: 100%;');
        // cy.get('#main-content div:nth-child(20) [class^="MuiSlider-root"] span:nth-child(4) .MuiSlider-valueLabelLabel')
        // .invoke('val', '100').should('have.value', '100' )
        // cy.get('#main-content div:nth-child(20) [class^="MuiSlider-root"] span:nth-child(4) input')
        // .should('have.attr', 'aria-valuenow', '100') 
        // .should('have.attr', 'aria-valuetext', '100°C')
        // .should('have.attr', 'value', '100');
        
    });

    it('Slider with input field', () => {
        cy.scrollTo('0%','45%');
        cy.wait(3000);
        // сделал и эти, но слайдер и без них перемещается
        // cy.get('#main-content div:nth-child(24) [class*="track"]').should('be.visible')
        // .invoke('attr', 'style', 'left: 0%; width: 100%;')
        // .should('attr', 'style', 'left: 0%; width: 100%;');
        // cy.get('#main-content div:nth-child(24) [class*="thumb"] ').should('be.visible')
        // .invoke('attr', 'style', 'left: 100%; width: 0%;')
        // .should('attr', 'style', 'left: 100%; width: 0%;');
        cy.get('#main-content div:nth-child(24) [class*="input"]')//.scrollIntoView({offset:{top:-300}})
        .should('be.visible')
        .clear()
        .type('100')
        .should('have.value', '100');
        //cy.get('#main-content div:nth-child(24) input[data-index]')
        cy.get('#main-content div:nth-child(24) [data-focusvisible]').find('input')
        .should('have.attr', 'value', '100')
        .and('have.attr', 'aria-valuenow', '100')

    });
    it('Music player', () => {
        cy.wait(3000);
        cy.scrollTo('0%','60%');
        cy.get('#main-content div:nth-child(30) [class^="MuiSlider-track"]').should('be.visible')
        .invoke('attr', 'style', 'left: 0%; width: 100%;')
        .should('attr', 'style', 'left: 0%; width: 100%;');
        cy.get('#main-content div:nth-child(30) [data-focusvisible]').should('be.visible')
        .invoke('attr', 'style', 'left: 100%;')
        .should('attr', 'style', 'left: 100%;');
    })
})