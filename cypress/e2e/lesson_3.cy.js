/*describe('ZEC/BTC', () => {
    it('find ZEC', () => {
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/market/');
        cy.get('span.view-more-text').scrollIntoView();
        cy.get('span.view-more-text').click();
        cy.contains('ETH / USDC').should('be.visible');

    }) 
    it('check email',() => {
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com');
        cy.get('[aria-label="Email Address"]').first().type('dsfafa@jf.ir');
        cy.contains('REGISTER NOW').first().click();
        cy.get('#popUp-register-email',{timeout: 5000}).should('value', "dsfafa@jf.ir");
        cy.get('p.media-social__info').scrollIntoView();
        cy.screenshot();
    })
}) 
*/

//Домашка
/*Comments
1) Я бы тут заменила "button._3omZ_". этот локатор, он будет нестабильным.
Тест у меня прошел и запасился, отлично!
*/

describe('Autoriz',() => {
   /* beforeEach(() => {
        cy.viewport(1600,900);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.wait(7000);
    }) */
    /*it('Log in', () => {
        cy.get('button._3omZ_').should('be.visible').click();
        cy.get('[data-testid="buttonElement"]').click();
        cy.get('[id*=_input_email]').type('123qwe@i.ua').should('have.value','123qwe@i.ua');
        cy.get('[id*=_input_pass]').type('1234567').should('have.value','1234567');
        cy.get('[data-testid="buttonElement"]').click();

    }) */
    
    
    /*Comments
    1) Заменить нужно бы локатор cy.get('[id^="comment"][data-hook="comment-content"] span span').eq(0).should('text','Все-таки получилось)');
    на вот такой можно
     cy.get('[data-id="rich-content-viewer"]', {
      timeout: 5000,
    })
      .eq(1)
      
      2) И вот тут можно было бы заменить .should('text','Все-таки получилось) на "have.text"
      
      Молодец!
    
    */
    it('add comment',() => {
        cy.viewport(1900,1200);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/blog');
        cy.wait(12000);
        cy.get('[href*="/post/m"][class*="lk"]').should('be.visible').click();
        cy.wait(5000);
        cy.contains('Comments').scrollIntoView();
        cy.contains('Write a comment...').click();
        cy.get('[class*="Default-block "]').type('Все-таки получилось)').should('text','Все-таки получилось)');
        cy.get('[data-hook="submit-button"]').click();
        cy.wait(3000);
        cy.get('[aria-label="Close"]').click();
        cy.get('[id^="comment"][data-hook="comment-content"] span span').eq(0).should('text','Все-таки получилось)');
    })
})
