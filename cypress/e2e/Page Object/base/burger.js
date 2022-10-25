class burger {

    get buttonOpenBurgerMenu () {
        return cy.get('.navbar > a')
    };

    get burgerMenu () {
        return cy.get('.navbar > a')
    };

    get buttonOpenSubMenuBags () {
        return cy.get('#sub-menu>li:nth-child(2)')
    };

    get bergerSubMenuBags () {
        return cy.get('#sub-menu>li:nth-child(2)>ul')
    };

    get buttonBergerMenuBack () {
        return cy.get('#unset .sidebar-back')
    };
}module.exports = new burger