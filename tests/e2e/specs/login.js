describe("Login Page", () => {
  it("Create a", () => {
    cy.visit("http://localhost:8080/login");
    cy.get("#input-32").type("martita.apel@gmail.com");
    cy.get("#input-36").type("hanabi12345");
    cy.get("#ingresar_boton").click();
  });
});
