import {data} from '../../fixtures/ex1.json'

describe('verify the fixture with the multiple test case', function() {
    Cypress.on('uncaught:exception',function(err,runnble){
        return false
    })

    data.forEach(function (el) {
        it('verify the fixture with obj ', function () {
            // cy.log(el)
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"]').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('textarea.feedback-input').type(el.email)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('be.visible')
        })

    })




    data.forEach(function (el,index) {
        it.only(`verify the fixture with obj -${index+1}`, function () {
            // cy.log(el)
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"]').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('textarea.feedback-input').type(el.email)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('be.visible')
        })

    })
})



