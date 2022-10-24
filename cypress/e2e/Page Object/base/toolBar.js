const selectors = {
    buttonMenuHome:'#mainnav > ul > li:nth-child(2)',
    homeSubMenu:'#mainnav > ul > li:nth-child(2) > ul',
    linkOnPageHome:"#mainnav > ul > li:nth-child(2) > ul > li > a",
    buttonMenuShop:'#mainnav > ul > li:nth-child(3)',
    shopSubMenu:'#mainnav > ul > li:nth-child(3) > ul',
    linkOnPageShop:"#mainnav > ul > li:nth-child(3) > ul > li > a",
    buttonMenuProducts:'#mainnav > ul > li:nth-child(4)',
    productsSubMenu:'#mainnav > ul > li:nth-child(4) > ul',
    linkOnPageProduct:"#mainnav > ul > li:nth-child(4) ul li a",
    buttonMenuFeatures:'#mainnav > ul > li:nth-child(5)',
    featuresSubMenu:'#mainnav > ul > li:nth-child(5) > ul',
    linkOnPageFeatures:"#mainnav > ul > li:nth-child(5) > ul a"
};

class toolBar {
    // можно через get, либо через обьект с локаторами 
    // get buttonMenuHome() {
    //     return '#mainnav > ul > li:nth-child(2)';
    // };

    // get homeSubMenu() {
    //     return '#mainnav > ul > li:nth-child(2) > ul';
    // };

    ///////////////////

    pageInSectionHome(text) {
        return cy.get(selectors.linkOnPageHome).contains(text)
    };

    pageInSectionShop(text) {
        return cy.get(selectors.linkOnPageShop).contains(text)
    };

    // pageInSectionProducts(text) {
    //     return cy.get("#mainnav > ul > li:nth-child(4) ul li:nth-child(4) a").contains(text)
    // };

    pageInSectionProducts(text) {
        return cy.get(selectors.linkOnPageProduct).contains(text)
    };

    pageInSectionFeatures(text) {
        return cy.get(selectors.linkOnPageFeatures).contains(text)
    };

    // pageInSectionPages(text) {
    //     return cy.get("#mainnav > ul > li:nth-child(2) > ul > li > a").contains(text)
    // };

    // pageInSectionBlogs(text) {
    //     return cy.get("#mainnav > ul > li:nth-child(2) > ul > li > a").contains(text)
    // };

    openPageOnSelectionHome(namePage) {
        cy.get(selectors.buttonMenuHome).click;
        cy.get(selectors.homeSubMenu).invoke('show');
        this.pageInSectionHome(namePage).click();
    };

    openPageOnSelectionShop(namePage) {
        cy.get(selectors.buttonMenuShop).click;
        cy.get(selectors.shopSubMenu).invoke('show');
        this.pageInSectionShop(namePage).click();
    };

    openPageOnSelectionProducts(namePage) {
        cy.get(selectors.buttonMenuProducts).click;
        cy.get(selectors.productsSubMenu).invoke('show');
        this.pageInSectionProducts(namePage).click();
    };

    openPageOnSelectionFeatures(namePage) {
        cy.get(selectors.buttonMenuFeatures).click;
        cy.get(selectors.featuresSubMenu).invoke('show');
        //cy.get('#mainnav > ul > li:nth-child(5) > ul ul').invoke('show');
        this.pageInSectionFeatures(namePage).click();
    };

}module.exports = new toolBar();