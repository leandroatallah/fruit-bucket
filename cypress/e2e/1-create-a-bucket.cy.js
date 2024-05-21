/// <reference types="cypress" />

describe("Create a bucket and add a fruit", () => {
  before(() => {
    cy.clearAllLocalStorage();
    cy.visit("http://localhost:5173/");
  });

  it("create a new bucket", () => {
    cy.createNewBucket("10");
  });

  it("create a new fruit", () => {
    cy.createNewFruit("Banana", "2.50");
  });

  it("Add a created fruit to the bucket", () => {
    cy.moveFruitToBucket();
  });

  it("Check if the fruit is in the bucket and the total", () => {
    cy.get('[data-testid="bucket-fruit-item"]').should("have.length", 1);
    cy.get('[data-testid="bucket-item"]')
      .contains("Total: R$ 2,50")
      .should("exist");
  });

  it("create a second fruit and add to the bucket", () => {
    cy.createNewFruit("Maçã", "4.20");
    cy.moveFruitToBucket();
  });

  it("Check if the second fruit is in the bucket and the total", () => {
    cy.get('[data-testid="bucket-fruit-item"]').should("have.length", 2);
    cy.get('[data-testid="bucket-item"]')
      .contains("Total: R$ 6,70")
      .should("exist");
  });
});
