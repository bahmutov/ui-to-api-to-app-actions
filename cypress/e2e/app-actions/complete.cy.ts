it('completes a new todo', () => {
  cy.visit('/')
  // let the application load the data from the server
  cy.get('body').should('have.class', 'loaded')
  const id = String(Cypress._.random(1e5))
  const title = `${Cypress.currentTest.title} ${id}`
  cy.window().its('app').invoke('addTodo', title)
  cy.contains('.todo', title).should('be.visible').find('.toggle').click()
  cy.contains('.todo', title).should('have.class', 'completed')
})
