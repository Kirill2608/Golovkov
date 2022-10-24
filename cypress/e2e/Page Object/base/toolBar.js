const selectors = {
    buttonMenuHome:'#mainnav > ul > li:nth-child(2)',
    buttonMenuShop:'#mainnav > ul > li:nth-child(3)',
    buttonMenuProducts:'#mainnav > ul > li:nth-child(4)',
    buttonMenuFeatures:'#mainnav > ul > li:nth-child(5)',
    buttonMenuPages:'#mainnav > ul > li:nth-child(6)',
    buttonMenuBlogs:'#mainnav > ul > li:nth-child(7)',


    homeSubMenu:'#mainnav > ul > li:nth-child(2) > ul',
    shopSubMenu:'#mainnav > ul > li:nth-child(3) > ul',
    productsSubMenu:'#mainnav > ul > li:nth-child(4) > ul',
    featuresSubMenu:'#mainnav > ul > li:nth-child(5) > ul',
    featuresChildMenu:'#mainnav > ul > li:nth-child(5) > ul ul',
    pagesSubMenu:'#mainnav > ul > li:nth-child(6) > ul',
    pagesChildMenu:'#mainnav > ul > li:nth-child(6) > ul li ul',
    blogsSubMenu:'#mainnav > ul > li:nth-child(7) > ul',


    linkOnPageHome:"#mainnav > ul > li:nth-child(2) > ul > li > a",
    linkOnPageShop:"#mainnav > ul > li:nth-child(3) > ul > li > a",
    linkOnPageProduct:"#mainnav > ul > li:nth-child(4) ul li a",
    linkOnPageFeatures:"#mainnav > ul > li:nth-child(5) > ul ul li a",
    linkOnPagePages:"#mainnav > ul > li:nth-child(6) > ul ul li a",
    linkOnPageBlogs:"#mainnav > ul > li:nth-child(7) > ul a"
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

    pageInSectionPages(text) {
        return cy.get(selectors.linkOnPagePages).contains(text)
    };

    pageInSectionBlogs(text) {
        return cy.get(selectors.linkOnPageBlogs).contains(text)
    };

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
        cy.get(selectors.featuresChildMenu).eq(0).invoke('show');
        this.pageInSectionFeatures(namePage).click();
    };

    openPageOnSelectionPages(namePage) {
        cy.get(selectors.buttonMenuPages).click;
        cy.get(selectors.pagesSubMenu).invoke('show');
        cy.get(selectors.pagesChildMenu).eq(0).invoke('show');
        this.pageInSectionPages(namePage).click();
    };

    openPageOnSelectionBlogs(namePage) {
        cy.get(selectors.buttonMenuBlogs).click;
        cy.get(selectors.blogsSubMenu).invoke('show');
        this.pageInSectionBlogs(namePage).click();
    };

}module.exports = new toolBar();