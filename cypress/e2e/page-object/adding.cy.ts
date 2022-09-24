import { TodoPage } from './utils'
it('adds a new todo', () => {
  TodoPage.visit()
  // tip: use the test name + random number to
  // generate unique data
  const title = `${Cypress.currentTest.title} ${Cypress._.random(1e5)}`
  TodoPage.addTodo(title)
  // confirm the todo is preserved on the server
  cy.reload()
  TodoPage.hasTodo(title)
})
