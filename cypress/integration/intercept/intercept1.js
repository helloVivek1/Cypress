///<reference types= "cypress"/>


describe('verify the intercept request',function(){

    Cypress.on("uncaught:exception",function(err,runnable){
        return false
    })


    it('TC-1',function(){
        cy.intercept({
            method:"GET",
            url: " https://jsonplaceholder.cypress.io/comments/1"
        }).as('getcomment')
          
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@getcomment')
        cy.get('.network-comment').should('contain','laudantium enim quasi est quidem magnam voluptate ipsam eos')

        
    })

    it('TC-2',function(){
        cy.intercept({
            method:"post",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('postcomment')
          
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-post btn btn-success"]').click()
        cy.wait('@postcomment')
        cy.get('.network-post-comment').should('be.visible')
        cy.get('.network-post-comment').should('have.text','POST successful!')

               
    })

    it.only('TC-2',function(){
        cy.intercept({
            method:"post",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('updatecomment')
          
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-put btn btn-warning"]').click()
        // cy.wait('@updatecomment')
        // cy.get('.network-put btn btn-warning').should('have.text','Update Comment')
       

               
    })
})