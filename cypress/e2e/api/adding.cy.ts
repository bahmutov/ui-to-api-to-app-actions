it('adds a new todo', () => {
  cy.visit('/')
  // let the application load the data from the server
  cy.get('body').should('have.class', 'loaded')
  // tip: use the test name + random number to
  // generate unique data
  const title = `${Cypress.currentTest.title} ${Cypress._.random(1e5)}`
  // spy on the API call the app is making to create a todo
  cy.intercept('POST', '/todos').as('addTodo')
  cy.get('.new-todo').type(title + '{enter}')
  cy.contains('.todo', title).should('be.visible')
  // confirm the todo is preserved on the server
  cy.reload()
  cy.contains('.todo', title).should('be.visible')
  // confirm the API request
  cy.wait('@addTodo')
    .its('request.body')
    .should('deep.include', {
      title,
      completed: false,
    })
    .and('have.property', 'id')
})
