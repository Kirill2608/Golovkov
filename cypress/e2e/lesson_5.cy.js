
//describe('shop', () => {
    // it('add to card', () => {
    //     cy.viewport(1200,900);
    //     cy.visit('http://the-internet.herokuapp.com/iframe');
    //     cy.wait(3000);
    //     cy.get('iframe').then(function($iFrame){
    //         const iframe = $iFrame.contents().find('body');
    //         cy.wrap(iframe).clear().type(Hello)
    //     })
    // })
    
//     it('add to card2', () => {
//         cy.viewport(1200,900);
//         cy.visit('http://elfsight.com/ru/instagram-feed-instashow/create/');
//         cy.wait(3000);
//         cy.get('iframe').then(function($iFrame){
//             const iframe = $iFrame.contents().find('body');
//             cy.wrap(iframe).find('.ea-editor-templates-header').then((content) => {
//             expect(content.text()).to.be.equal('jdbvhdbvjhdbvjhdbvjhb')
//             })

            
//         })
//     })

    
// })
 /*
// Практическое

describe('work', () => {
    it('new', () => {
        cy.viewport(1600, 1600);
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.wait(3000);
        cy.get('iFrame').then(function($iFrame){
            const iFrame = $iFrame.contents().find('body');
            cy.wrap(iFrame).find('[title="Slider"] span').then((content)=> {
                expect(content.text()).contain('Slider')
            })
        })
    });
    it.only('new1', () => {
        cy.viewport(1600, 1600);
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.wait(3000);
        cy.get('iFrame').then(function($iFrame){
            const iFrame = $iFrame.contents().find('body');
            cy.wrap(iFrame).find(':first-child.ea-editor-templates-actions-customize').click()
            })
        })
    });
    */

    //Домашка
   // 1. Напишите тест на фреймы по ссылке ниже https://demoqa.com/frames (проверку напишите
       // на ваше усмотрение, к примеру введите текст и проверьте его)
   
   
     describe('iFrame', () => {
        beforeEach(() => {
        cy.viewport(1200,900);
        cy.visit('https://demoqa.com/frames');
        })
    it('check text', () => {
        cy.get('#frame1').then(function($iFrame){
        const myFrame = $iFrame.contents().find('body')
        cy.wrap(myFrame).find('#sampleHeading').should('have.text', 'This is a sample page')
        })
    })
    it('check text-2', () => {
        cy.get('#frame1').then(function($iFrame){
        const myFrame = $iFrame.contents().find('body')
        cy.wrap(myFrame).find('#sampleHeading').then((text) => {
        const result = text.text()
        expect(result).to.be.equal('This is a sample page')
        })
        })
        })
    it('check attr', () => {
        cy.get('#frame1').then(function($iFrame){
        const myFrame = $iFrame.contents().find('body')
        cy.wrap(myFrame).find('#sampleHeading').should('have.attr', 'id', 'sampleHeading')
        })
    })
})