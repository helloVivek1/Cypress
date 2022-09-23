///<reference types ="cypress"/>


describe("login to contact us form",()=>{
    it("TC 01",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type('vivek')
        cy.get('[name="last_name"]').type('ghatole')
        cy.get('[name="email"]').type('hello@gmail.com')
        cy.get('textarea.feedback-input').type("hii i am new here")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')
                
    })
})
