///<reference types ="cypress"/>
describe('verious way to handle the switchlab functionality',function(){
    it('To verify the switchlab 1st way',function(){
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('contain','Contact-Us')
    })

    it.only('2nd way to handle the switchlab in cypress',function(){
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','target','_self').click()
        cy.url().should('contain','Contact-Us')
    })
})