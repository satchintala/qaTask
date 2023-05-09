class Homepage_PO {
  visitHomepage = () => {
    cy.visit(Cypress.env("sh_homepage"));
    cy.get("#onetrust-accept-btn-handler:visible").click();
  };

  clickOn_My_Account = () => {
    cy.get("a[href$='/member-portal']").click({ force: true });
  };
}

export default Homepage_PO;
