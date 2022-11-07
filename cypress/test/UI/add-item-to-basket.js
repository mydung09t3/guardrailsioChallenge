describe('Add One Item to Basket and add  new address', () => {
  beforeEach('Open the page and Login before each test', () => {
    cy.visit('/');
    cy.get('button[aria-label="Close Welcome Banner"]').click();
    cy.login(Cypress.env('USERNAME'), Cypress.env('PASS'));
    cy.fixture('address-data').as('address');
  });

  it('Add 1 item to cart and add new Address', function () {
    cy.log('Add item to basket');
    cy.addItemToBasket('Apple Juice (1000ml)');
    cy.log('Open basket');
    cy.openBasket();
    cy.checkoutBasket();
    cy.log('Click New Address and Add address');
    cy.clickAddNewAddress();
    cy.fillAddress(
      this.address.country,
      this.address.name,
      this.address.mobileNumber,
      this.address.zipCode,
      this.address.address,
      this.address.city,
      this.address.state,
    );
    cy.log('Delete data after created');
    cy.deleteExistingAddress();
    cy.openBasket();
    cy.deleteAddedItem();
  });

  it('Add 2 items to cart and add new Address', function () {
    cy.log('Add item to basket');
    cy.addItemToBasket('Apple Juice (1000ml)');
    cy.addItemToBasket('Apple Pomace');
    cy.log('Open basket and check out');
    cy.openBasket();
    cy.checkoutBasket();
    cy.log('click Add new Address to add');
    cy.clickAddNewAddress();
    cy.fillAddress(
      this.address.country,
      this.address.name,
      this.address.mobileNumber,
      this.address.zipCode,
      this.address.address,
      this.address.city,
      this.address.state,
    );
    cy.log('Delete data after created');
    cy.deleteExistingAddress();
    cy.openBasket();
    cy.deleteAddedItem();
  });
});
