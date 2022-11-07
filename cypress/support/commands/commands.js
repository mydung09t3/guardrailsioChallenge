// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Login Method
 * Param: email, password
 */
Cypress.Commands.add('login', (email, passWord)=>{
  cy.get('.mat-button-wrapper > span:contains(Account)').should("be.visible").click();
  cy.get('#navbarLoginButton').should("be.visible").click();
  cy.get("#email").should("be.visible").clear().type(email);
  cy.get("#password").clear().type(passWord);
  cy.get('#loginButton').click();
} )

/**
 * Add Item to backset, Use this method to add a item to basket
 * param: item name
 */
Cypress.Commands.add('addItemToBasket', (itemName)=>{
  cy.get(`div:contains(${itemName})`).parent('div').parent('div').next().click().wait(2000);
  cy.get('span.mat-simple-snack-bar-content').should("be.visible");
})

/**
 * open Basket to view added item
 */
Cypress.Commands.add('openBasket', ()=>{
  cy.get('button[aria-label="Show the shopping cart"]').click();
})

/**
 * Click checkout on the basket to continue order
 */
Cypress.Commands.add('checkoutBasket', ()=>{
  cy.get('#checkoutButton').should("be.visible").click();

})

/**
 * Click Add  new Address button
 */
Cypress.Commands.add('clickAddNewAddress', ()=>{
  cy.get('button[aria-label="Add a new address"]').should("be.visible").click();
})

/**
 * fill address information
 * param: country, name, mobilePhone, zipCode, address, city, state
 */
Cypress.Commands.add('fillAddress', (country, name, mobilePhone, zipCode, address, city, state)=>{
  cy.get('input[data-placeholder="Please provide a country."]').type(country);
  cy.get('input[data-placeholder="Please provide a name."]').type(name);
  cy.get('input[data-placeholder="Please provide a mobile number."]').type(mobilePhone)
  cy.get('input[data-placeholder="Please provide a ZIP code."]').type(zipCode);
  cy.get('#address').type(address)
  cy.get('input[data-placeholder="Please provide a city."]').type(city)
  cy.get('input[data-placeholder="Please provide a state."]').type(state)
  cy.get('#submitButton').click();
})

/**
 * Delete all existing address 
 */
Cypress.Commands.add("deleteExistingAddress", ()=>{
  cy.get('span:contains(Account)').eq(1).click();
  cy.get('button[aria-label="Show Orders and Payment Menu"]').click();
  cy.get('button[aria-label="Go to saved address page"]').click();
  cy.get('mat-table.mat-table').find('mat-row').its('length').then((length) =>{
    cy.log(length);
    for(let i =0; i<length; i++){
      cy.log(i);
      cy.get('[data-icon="trash-alt"]').eq(0).click().wait(1000);
    }
  })
})

/**
 * Search product by name
 * Param: productName
 */
Cypress.Commands.add('searchProduct', (productName)=>{
  cy.get('mat-icon.mat-search_icon-search').click();
  cy.get('mat-form-field.mat-search_field').type(`${productName}{enter}`);
})

/**
 * Delete the added item in basket
 */
Cypress.Commands.add("deleteAddedItem", ()=>{
    cy.get('mat-table.mat-table').find('mat-row').its('length').then((length) =>{
      cy.log(length);
      for(let i =0; i<length; i++){
        cy.log(i);
        cy.get('[data-icon="trash-alt"]').eq(0).click().wait(1000);
      }
    })
})
