import Homepage_PO from "../../support/pageObjects/Homepage_PO";
/// <reference types="Cypress" />

describe("Login Tests", () => {
  //Hook
  beforeEach(() => {
    cy.fixture("userDetails").as("user");

    const homepage_PO = new Homepage_PO();
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_My_Account();
  });

  //Personal Member Login
  it("Personal Member Login", () => {
    cy.get("@user").then((user) => {
      cy.get("input[name='email']").type(user.email);
      cy.get("#password").type(user.password);
    });
    cy.xpath("//button[@class='Button_send_button__BUQYP']").click();

    cy.location("href").should(
      "eq",
      "https://www.simplyhealth.co.uk/member-portal/onboard"
    );
    cy.location("pathname").should("eq", "/member-portal/onboard");
  });

  //Custom Login Command
  it("Login using custom command", () => {
    cy.get("@user").then((user) => {
      cy.login(user.email, user.password);
    });
  });
});
