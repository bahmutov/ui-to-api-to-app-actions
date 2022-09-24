import { TodoPage } from './utils'
it('completes a new todo', () => {
  TodoPage.visit()
  // tip: use the test name + random number to
  // generate unique data
  const title = `${Cypress.currentTest.title} ${Cypress._.random(1e5)}`
  TodoPage.addTodo(title)
  TodoPage.hasTodo(title).find('.toggle').click()
  TodoPage.hasTodo(title).should('have.class', 'completed')
})
