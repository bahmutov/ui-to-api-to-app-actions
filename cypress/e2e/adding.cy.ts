it('adds a new todo', () => {
  cy.visit('/')
  cy.get('body').should('have.class', 'loaded')
  const title = `${Cypress.currentTest.title} ${Cypress._.random(1e5)}`
  cy.get('.new-todo').type(title + '{enter}')
})
