describe("Anime API Testing", () => {

    it("fetch random quotes", () => {

        cy.request("/random").as("animeRequest");

        cy.get("@animeRequest").then((data) => {

            expect(data.status).to.eq(200);

            expect(data.body.status).to.eq("success");

        })

    })



    it("check for array", () => {

        cy.request("https://api.chucknorris.io/jokes/categories").as("jokes");

        cy.get("@jokes").then(data => {

            expect(data.status).to.eq(200);

            assert.isArray(data.body, "Jokes cat is an Array")

        })

    })

})