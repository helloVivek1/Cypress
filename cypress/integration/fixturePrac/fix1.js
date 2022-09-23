///<reference types="cypress"/>

describe('verify the fixture', () => {

    // it.skip('verify the fixture with hardcoded value',()=>{

    //     cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    //     cy.get('input[name="first_name"]').type('vivek')
    //     cy.get('[name="last_name"]').type('ghatole')
    //     cy.get('[name="email"]').type('hello@gmail.com')
    //     cy.get('textarea.feedback-input').type("hii i am new here")
    //     cy.get('[type="submit"]').click()
    //     cy.get('h1').should('be.visible')

    // })

    // let obj = {
    //     firstName: "vivek",
    //     lastName : "ghatole",
    //     email: "vivek@gmail.com",
    //     massage:"hii i am new here",
    //     }
    // it('verify the fixture with obj value',()=>{
    //     cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    //     cy.get('input[name="first_name"]').type(obj.firstName)
    //     cy.get('[name="last_name"]').type(obj.lastName)
    //     cy.get('[name="email"]').type(obj.email)
    //     cy.get('textarea.feedback-input').type(obj.email)
    //     cy.get('[type="submit"]').click()
    //     cy.get('h1').should('be.visible')

    // })



    it.only('verify the fixture with obj in array', function () {
        cy.fixture("ex1.json").then(function (res) {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type(res[0].firstName)
        cy.get('[name="last_name"]').type(res[0].lastName)
        cy.get('[name="email"]').type(res[0].email)
        cy.get('textarea.feedback-input').type(res[0].email)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')
        })
        
    })

    it.only('verify the fixture with obj value', function () {
        cy.fixture("ex1.json").then(function (res) {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type(res[1].firstName)
        cy.get('[name="last_name"]').type(res[1].lastName)
        cy.get('[name="email"]').type(res[1].email)
        cy.get('textarea.feedback-input').type(res[1].email)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')
        })
        
    })
})