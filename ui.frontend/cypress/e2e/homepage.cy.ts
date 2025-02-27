/// <reference types="cypress" />

describe("Home Page", () => {
  it("passes", () => {
    cy.visit("https://www.iamhelium.com.au");
    cy.compareSnapshot("Home Page");
  });

  after(() => {
    cy.task("generateReport", {
      reportName: "Home Page",
      reportDir: "cypress/snapshots/actual",
      reportTitle: "Home Page",
      reportType: "html",
    });
  });
});
