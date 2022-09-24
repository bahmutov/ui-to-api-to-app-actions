it('deletes a todo', () => {
  const id = String(Cypress._.random(1e5))
  const title = `${Cypress.currentTest.title} ${id}`
  cy.request('POST', '/todos', {
    title,
    completed: false,
    id,
  })
  cy.visit('/')
  // let the application load the data from the server
  cy.get('body').should('have.class', 'loaded')
  cy.contains('.todo', title)
    .should('be.visible')
    .find('.destroy')
    .click({ force: true })
  cy.contains('.todo', title).should('not.exist')
  cy.request('GET', '/todos')
    .its('body')
    .then((list) => {
      expect(Cypress._.find(list, { id }), 'item with ID').to.be.undefined
    })
})
