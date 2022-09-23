///<reference types = "cypress"/>
describe('To verify the Iframe functionality',function(){
    Cypress.on(function(err,runnable){
        return false
    })
    it('To check the iframe functionality',function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(el){
            const aa=el.contents().find('body')
            cy.wrap(aa).as('getiframe')
            cy.get('@getiframe').find('ul[class="nav navbar-nav"]').find('li').should('have.attr','class','active')         
            
        })
    })

    it('To check the iframe functionality',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#courses-iframe').then(function(el){
            const bb = el.contents().find('body')
            cy.wrap(bb).as('ele')
            cy.get('@ele').find('ul[class="navigation clearfix"]').first().eq(0).should('contain','Home')
        })         
    })

    it.only('To check the iframe functionality using the javaScript with new and shortest way',function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        .find('li[class="active"]').last().should('have.text','Home')
    })
})