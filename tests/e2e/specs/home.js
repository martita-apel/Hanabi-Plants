describe("Home Page", () => {
  it("Toggles the burger button", () => {
    cy.viewport("iphone-6");
    cy.visit("http://localhost:8080");
    cy.get(".v-btn__content").should("not.have.css", "display", "block");
  });
});
