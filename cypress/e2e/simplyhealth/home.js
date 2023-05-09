import Homepage_PO from "../../support/pageObjects/Homepage_PO";
/// <reference types="Cypress" />

describe("Sample Test Suite", () => {
  let user;
  //Hooks
  beforeEach(() => {
    const homepage_PO = new Homepage_PO();
    homepage_PO.visitHomepage();
  });

  //Visit Home Page
  it("Home page", () => {
    cy.location().then((loc) => {
      expect(loc.href).to.equal("https://www.simplyhealth.co.uk/");
      expect(loc.protocol).to.equal("https:");
      expect(loc.pathname).to.equal("/");
    });

    cy.title().should(
      "eq",
      "Simplyhealth | Health & Dental Plans to cover you"
    );
  });
});
