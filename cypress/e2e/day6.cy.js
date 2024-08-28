require('dotenv').config()
const username= Cypress.env('name');
const pass = Cypress.env('pass');

describe("Test" , ()=>{
    it('login' , () => {
        cy.visit('https://www.google.co.in/')
        cy.get('a[class="gb_Sa gb_wd gb_nd gb_ed"]').click()
        cy.wait(5000)
        cy.get('input[class="whsOnd zHQkBf"][id="identifierId"]').type(username)
        cy.get('span[class="VfPpkd-vQzf8d"]').type(pass)
        cy.get('div[class="VfPpkd-RLmnJb"]').click()
    })
})