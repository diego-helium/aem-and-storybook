/// <reference types="cypress" />

describe("Card Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4503/content/wknd/us/en/tests/card.html");
  });

  it("it has all elements authored", () => {
    cy.get('.cmp-card').first().within(() => {
      cy.get(".cmp-card__content").should("be.visible");
      // cy.get(".cmp-card__image").should("be.visible");
      cy.get(".cmp-card__name").should("be.visible");
      cy.get(".cmp-card__roles").should("be.visible");
      cy.get(".cmp-card__rating").should("be.visible");
      cy.get(".cmp-card__description p")
        .should("be.visible")
        .and("have.text",
          `UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.`);
      cy.compareSnapshot("first-card");
    });
  });


  it("Second card has no rating", () => {
    cy.get('.cmp-card').eq(1).within(() => {
      cy.get(".cmp-card__content").should("be.visible");
      // cy.get(".cmp-card__image").should("be.visible");
      cy.get(".cmp-card__name").should("be.visible");
      cy.get(".cmp-card__roles").should("be.visible");
      cy.get(".cmp-card__rating").should("not.be.visible");
      cy.get(".cmp-card__description p")
        .should("be.visible")
        .and("have.text",
          `UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.`);
      cy.compareSnapshot("second-card");
    });
  });


  after(() => {
    cy.task("generateReport", {
      reportName: "Card Page",
      reportDir: "./cypress/visual-test/cypress-image-diff-screenshots",
      reportTitle: "Card Page",
      reportType: "html",
    });
  });
});
