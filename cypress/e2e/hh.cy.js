require('dotenv').config()
const username= Cypress.env('name');
const pass = Cypress.env('pass');

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type(username)
      cy.get('input[type="password"]').type(pass)
      cy.get('button[type="submit"]').click()
      cy.wait(5000)
      cy.screenshot()
    })
  })