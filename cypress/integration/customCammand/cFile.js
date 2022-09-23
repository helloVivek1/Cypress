describe('login the HRM site',function(){
    it('verify the login functionality with customCommand',function(){
        // username,lastname,email,message
        cy.login("vicky","ghatole","abdfd12c@gmail.com","hello")
        cy.get('h1').should('be.visible')

    })

    it.only('verify the HRM Orange login with correct credetial',function(){
        cy.login('Admin',"admin123")
        cy.get('.oxd-userdropdown-tab').should('be.visible')
    })
})