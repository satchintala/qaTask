/// <reference types="Cypress" />

describe("Pet tests", () => {
  //POST Request
  it("POST a pet", () => {
    const new_id = Math.floor(Math.random() * 10000);
    Cypress.env({ new_id: new_id });

    cy.request({
      method: "POST",
      url: "/pet",
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: {
        id: new_id,
        category: {
          id: 1,
          name: "Dog",
        },
        name: "Charlie" + new_id,
        photoUrls: [""],
        tags: [
          {
            id: 1,
            name: "dogs",
          },
        ],
        status: "available",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eql("Charlie" + new_id);
    });
  });

  //GET Request
  it("GET a pet", () => {
    cy.request({
      method: "GET",
      url: "/pet/" + Cypress.env("new_id"),
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eql("Charlie" + Cypress.env("new_id"));
      expect(response.body.category.name).to.eql("Dog");
    });
  });

  //PUT Request
  it("PUT (Update) a pet", () => {
    cy.request({
      method: "PUT",
      url: "/pet",
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: {
        id: Cypress.env("new_id"),
        category: {
          id: 1,
          name: "Dog",
        },
        name: "Charlie" + Cypress.env("new_id") + " V2",
        photoUrls: [""],
        tags: [
          {
            id: 1,
            name: "dogs",
          },
        ],
        status: "available",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eql(
        "Charlie" + Cypress.env("new_id") + " V2"
      );
      expect(response.body.category.name).to.eql("Dog");
    });
  });

  //DELETE Request
  it("DELETE ", () => {
    cy.request({
      method: "DELETE",
      url: "/pet/" + Cypress.env("new_id"),
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eql(Cypress.env("new_id").toString());
      expect(response.body.type).to.eql("unknown");
    });
  });
});
