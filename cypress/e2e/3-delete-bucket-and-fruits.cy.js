/// <reference types="cypress" />

describe("Move fruits between buckets", () => {
  before(() => {
    cy.clearAllLocalStorage();
    cy.visit("http://localhost:5173/");
  });

  it("create new buckets", () => {
    cy.get("input#capacity").type("5").should("have.value", "5");
    cy.get('button[type="submit"]').first().click();

    cy.get("input#capacity").type("5").should("have.value", "5");
    cy.get('button[type="submit"]').first().click();
  });

  it("create new fruits", () => {
    cy.createNewFruit("Abacaxi", "4.90");
    cy.createNewFruit("Melancia", "5.50");
  });

  it("Add the created fruits to the first bucket", () => {
    cy.moveFruitToBucket();
    cy.moveFruitToBucket();
  });

  it("Delete the second bucket that has no fruits", () => {
    cy.get('[data-testid="bucket-item"]')
      .eq(1)
      .within(() => {
        cy.get('[data-testid="delete-bucket"]').click();
      });
    cy.get('[role="alert"]').should(
      "contain.text",
      "Balde removido com sucesso"
    );
  });

  it("Try to delete the first bucket that has fruits", () => {
    cy.get('[data-testid="bucket-item"]')
      .first()
      .within(() => {
        cy.get('[data-testid="delete-bucket"]').click();
      });
    cy.get('[role="alert"]').should(
      "contain.text",
      "Esvazie o balde antes de removê-lo"
    );
  });

  it("Remove the fruits from the first bucket and delete it", () => {
    function removeAFruit() {
      cy.get('[data-testid="bucket-fruit-item"]')
        .first()
        .within(() => {
          cy.get('[data-testid="remove-fruit"]').click();
        });
      cy.get('[role="alert"]').should(
        "contain.text",
        "Fruta removida do balde com sucesso"
      );
    }

    removeAFruit();
    removeAFruit();

    cy.get('[data-testid="bucket-fruit-item"]').should("have.length", 0);

    cy.get('[data-testid="bucket-item"]')
      .first()
      .within(() => {
        cy.get('[data-testid="delete-bucket"]').click();
      });
    cy.get('[role="alert"]').should(
      "contain.text",
      "Balde removido com sucesso"
    );
  });
});
