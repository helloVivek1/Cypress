///<reference types = "cypress"/>
describe('verify the navigation',function(){
    Cypress.on("uncaught:exception",function(err,runnable){
        return false
    })

    it('verify the contact us form with the navigation',function(){
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('input[class="feedback-input"]').first().type('Vivek')
        cy.get('input[class="feedback-input"]').eq(1).type('Ghatole')
        cy.get('input[class="feedback-input"]').eq(2).type('ck.gha@gmail.com')
        cy.get('textarea[name="message"]').type('Hii i am new here...!')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible')

    })
})