/*describe('template spec', () => {
    it('passes', () => {
      cy.visit('www.nykaa.com')
      cy.get('div[class="active css-1xt6clv"]').type('kajal').type('{enter}')
      cy.get('span[class="css-1upamjb"]').should('have.text', 'Showing 20 of 403 results for ')
    })
  })*/

  describe('template spec', () => {
    it('test1', () => {
      cy.visit('www.flipkart.com')
      cy.wait(5000)
      cy.get('input[class="Pke_EE"]').click().type('iPhone15')
      cy.get('svg[xmlns="http://www.w3.org/2000/svg"]').click()
    })
  })

  describe('template spec', () => {
    it('test2', () => {
      cy.visit('www.samsung.com/in/')
      cy.wait(5000)
      cy.get('button[class="nv00-gnb__utility-btn gnb__search-btn-js"]').click()
      cy.get('input[id="gnb-search-keyword"]').type('Galaxy s24 Ultra')
      cy.get('button[class="gnb-search__input-btn--search"]').click()
    })
  })

    