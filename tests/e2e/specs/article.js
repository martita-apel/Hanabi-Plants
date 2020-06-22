describe("Login Page", () => {
  it("Create a", () => {
    cy.visit("http://localhost:8080/");
    cy.get("#nav_article").click();
    cy.get("#leer_mas").click();
    cy.get("h4.proximo_articulo").contains("PRÓXIMOS ARTÍCULOS");
  });
});
