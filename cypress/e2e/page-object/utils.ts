export const TodoPage = {
  visit() {
    cy.visit('/')
    // let the application load the data from the server
    cy.get('body').should('have.class', 'loaded')
  },
  addTodo(title: string) {
    cy.get('.new-todo').type(title + '{enter}')
    cy.contains('.todo', title).should('be.visible')
  },
  hasTodo(title: string) {
    // return the chainable object
    // to allow adding more assertions
    return cy.contains('.todo', title).should('be.visible')
  },
}
