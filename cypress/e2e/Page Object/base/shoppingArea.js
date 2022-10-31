class shoppingArea {

get buttonQuantityPlus () {
    return cy.get('.ti-angle-right')
};

get buttonQuantityMinus () {
    return cy.get('.quantity-left-minus')
};

get buttonAddToCard () {
    return cy.get('.product-buttons>a:nth-child(1)')
};

get buttonBayNow () {
    return cy.get('.product-buttons>a:nth-child(2)')
};

get checkPay () {
    return cy.get(".cart-section a")
};

get numberOfProducts () {
    return cy.get('input[name="quantity"]').eq(1)
};

checkProductsOnCard(text) {
    return cy.get(this.checkPay).contains(text)
};

}module.exports = new shoppingArea
