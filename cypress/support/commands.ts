/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

Cypress.Commands.add("createNewBucket", (capacity) => {
  cy.get("input#capacity").type(capacity).should("have.value", capacity);
  cy.get('button[type="submit"]').first().click();
  cy.get("[role=alert]").should("have.text", "Balde criado com sucesso.");
});

Cypress.Commands.add("createNewFruit", (name, price) => {
  cy.get("input#fruitName").type(name).should("have.value", name);
  cy.get("input#price").type(price).should("have.value", price);
  cy.get('button[type="submit"]').last().click();
  cy.get("[role=alert]").should("have.text", "Fruta criada com sucesso.");
});

Cypress.Commands.add("moveFruitToBucket", () => {
  cy.get('[data-testid="fruit-list-item"] button').first().click();
  cy.get('[data-testid="move-fruit-modal"] button').first().click();
  cy.get("[role=alert]").should(
    "have.text",
    "Fruta adicionada ao balde com sucesso."
  );
});

declare global {
  namespace Cypress {
    interface Chainable {
      createNewBucket(capacity: string): Chainable<void>;
      createNewFruit(name: string, price: string): Chainable<void>;
      moveFruitToBucket(): Chainable<void>;
    }
  }
}

export {};
