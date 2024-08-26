//retries
describe('LinkedIn ', () => {
    it('premium', {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    }, () => {
      cy.visit('https://www.linkedin.com/login')
      cy.get('[name="session_key"]').type('ece1821@cemk.ac.in')
      cy.get('[name="session_password"]').type('Tina@4500')
      cy.get('.btn__primary--large').click()
      cy.get('span'[class]).should('contain', 'Try Premium for ₹0')
    })
  })
  
  describe('LinkedIn Profile', () => {
    it('name', {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    }, () => {
      cy.visit('https://www.linkedin.com/login')
      cy.get('[name="session_key"]').type('ece1821@cemk.ac.in')
      cy.get('[name="session_password"]').type('Tina@4500')
      cy.get('.btn__primary--large').click()
      cy.wait(5000)
      //cy.get('div[class="t-16 t-black t-bold"]').should('contain', 'Welcome, SAYANI!')
      cy.contains('SAYANI') 
    })
  })