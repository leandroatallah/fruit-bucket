/// <reference types="cypress" />

describe("Move fruits between buckets", () => {
  before(() => {
    cy.clearAllLocalStorage();
    cy.visit("http://localhost:5173/");
  });

  it("create two new buckets", () => {
    cy.createNewBucket("10");
    cy.createNewBucket("10");
  });

  it("create a new fruit", () => {
    cy.createNewFruit("Laranja", "4.00");
  });

  it("Add a created fruit to the first bucket", () => {
    cy.moveFruitToBucket();
  });

  it("Move a fruit from the first bucket to the second bucket", () => {
    cy.get('[data-testid="bucket-fruit-item"] button').first().click();
    cy.get('[data-testid="move-fruit-modal"] button').click();
    cy.get("[role=alert]").should(
      "have.text",
      "Fruta adicionada ao balde com sucesso."
    );
  });

  it("Check if the fruit is in the second bucket", () => {
    cy.get('[data-testid="bucket-fruit-item"]').should("have.length", 1);
  });
});
