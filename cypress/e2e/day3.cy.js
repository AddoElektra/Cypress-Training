require('dotenv').config()
const username= Cypress.env('name');
const pass = Cypress.env('pass');

describe('Amazon Cognito Login', () => {
    it('should log in to Cognito successfully', () => {
      cy.visit('https://signin.aws.amazon.com/signup?request_type=register');
  
      // Assuming your app has a login button that redirects to Cognito login page
      cy.get('a[href="/login"]').click();
  
      cy.origin('https://your-cognito-domain.auth.region.amazoncognito.com', () => {
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(pass, { log: false });
        cy.get('button[type="submit"]').click();
      });
  
      // Verify successful login
      cy.url().should('include', '/dashboard');
    });
  });