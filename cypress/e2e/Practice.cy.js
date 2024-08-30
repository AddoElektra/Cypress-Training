//screenshot  
//dotenv
describe('screenshot', () => {
    it('login', () => {
      cy.visit('parabank.parasoft.com')
      cy.get('input[type="text"]').click().type(Cypress.env('name'))
      cy.get('input[type="password"]').click().type(Cypress.env('pass'))
      cy.get('input[class="button"]').click()
      cy.contains('The username and password could not be verified.')
      cy.screenshot()
    })
  })

  //testIsolation    //logins
  describe('Log In', () => {
    beforeEach(() => {
      cy.visit('www.ebay.com')
    })
  
    it('signin', () => {
      cy.get('span#gh-ug-flex').click()
      cy.visit('signup.ebay.com/pa/crte')
      cy.get('label[class="segmentInactive"]').click({retry:true}).wait(5000)
      cy.get('input#firstname[name="firstname"]').click().type('Sayani')
      cy.get('input#lastname[name="lastname"]').click().type('Pramanik')
      cy.get('input#Email[type="text"]').click().type(Cypress.env('name'))
      cy.get('input#password[type="password"]').click().type(Cypress.env('pass'))
      cy.screenshot()
    });
  
    it('invalid credentials', () => {
        cy.get('span#gh-ug-flex').click()
        cy.visit('signup.ebay.com/pa/crte')
        cy.get('a.action-link').click().wait(7000)
        cy.get('input#userid.textbox__control').click().type(Cypress.env('name'))
        cy.get('button#signin-continue-btn.btn.btn--fluid.btn--large.btn--primary').click()
        cy.get('input#pass.textbox__control').click().type('sayani12')
        cy.get('button#sgnBt').click().wait(5000)
        cy.get('p#signin-error-msg').should('be.visible').and('contain','This password is incorrect. Try again or ')
        cy.screenshot()
    })
  })
  
  

//retry //locator
 describe('Search', () => {
    it('searches for product', () => {
      cy.visit('www.ebay.com');
      cy.get('input#gh-ac').type('iPhone');
      cy.get('input#gh-btn').click({force:true,retry:true});
      cy.get('span.BOLD').should('contain', 'iPhone');
    });
  });
  
  //timeOut   //retries
  describe('timeout', () => {
    it('pass', () => {
        cy.visit('www.ebay.com')
        cy.get('span#gh-ug-flex').click()
        cy.visit('signup.ebay.com/pa/crte',{timeout:7000})
        cy.get('a.action-link').click()
        cy.get('input#userid.textbox__control').click().type(Cypress.env('name'))
        cy.get('button#signin-continue-btn.btn.btn--fluid.btn--large.btn--primary').click()
        cy.get('input#pass.textbox__control').click().type('sayani12')
        cy.get('button#sgnBt').click().wait(5000)
        cy.get('p#signin-error-msg').should('be.visible').and('contain','This password is incorrect. Try again or ')
        cy.screenshot()
    })
  })
  
  