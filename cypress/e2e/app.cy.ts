describe('Render the app', () => {
  it('should render the app', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to Acme.');
    cy.contains('Welcome to Acmexd.');
  });
});