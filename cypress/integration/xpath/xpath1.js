///<reference types="cypress"/>

describe('verify the product in flipkart by using the xpath',function(){
    // it('TC-1 use of xpath in cypress ',function(){
    //     cy.visit("https://www.amazon.in/s?k=samsung+m52&crid=3KE9TIU48UTGP&sprefix=samsung%2Caps%2C382&ref=nb_sb_ss_pltr-ranker-retrain-acsession-opsacceptance_6_7")
    //     cy.xpath('//div[contains(text(),"samsung")]//span[text()="mobile"]').click()
    // })

    it.only('Tc-2',function(){
        cy.visit('https://www.amazon.in/')
        cy.xpath("//div[contains(text(),'water bottles')]").should('contain','water bottles')
    })
})