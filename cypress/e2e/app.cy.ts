describe('Render the app', () => {
  it('should render the app', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to Acme.');
  });
});

describe('Render the app', () => {
  it('should render the app', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to Acmexd.');
  });
});