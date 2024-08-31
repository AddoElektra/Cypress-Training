describe("API ", () => {
    it("Food", () => {
        cy.request("https://rapidapi.com/apidojo/api/tasty").as("tasty")
        cy.get('@tasty').then((data) => {
            expect(data.status).to.eq(200)
            expect(data.headers).to.have.property('content-type', 'text/html; charset=utf-8')
            expect(data.body).to.be.an('string')
            expect(data.duration).to.be.lessThan(1000)
        })
    })

    it("Current News", () => {
        cy.request("https://currentsapi.services/en").as('news')
        cy.get('@news').then((data) => {
            expect(data.status).to.eq(200)
            expect(data.headers).to.have.property('content-type', 'text/html; charset=utf-8')
            expect(data.body).to.be.an('string')
            expect(data.body).to.contain('Online news is hard to curate and analyse')
            expect(data.duration).to.be.lessThan(1000)
        })
        cy.screenshot()
    })
})