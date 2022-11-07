describe("Search Product on list", ()=>{
    beforeEach("Open the page", ()=>{
        cy.visit("/");
        cy.get('button[aria-label="Close Welcome Banner"]').click();
        cy.login(Cypress.env("USERNAME"), Cypress.env("PASS"));
    })
    it("Search Product on List", ()=>{
        cy.log("Search product Name")
        cy.searchProduct('Apple');
        cy.log("Verify the search result");
        cy.get('div.item-name').should('have.length', 2);
        cy.get('div.item-name').should('contain.text', 'Apple').should('not.contain.text', 'Banana');
    })

})