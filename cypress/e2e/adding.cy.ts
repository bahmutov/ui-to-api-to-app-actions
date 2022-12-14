it('adds a new todo', () => {
  cy.visit('/')
  // let the application load the data from the server
  cy.get('body').should('have.class', 'loaded')
  // tip: use the test name + random number to
  // generate unique data
  const title = `${Cypress.currentTest.title} ${Cypress._.random(1e5)}`
  cy.get('.new-todo').type(title + '{enter}')
  cy.contains('.todo', title).should('be.visible')
  // confirm the todo is preserved on the server
  cy.reload()
  cy.contains('.todo', title).should('be.visible')
})
