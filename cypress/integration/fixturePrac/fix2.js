///<reference types="cypress"/>

describe('verify the fixture', () => {
    
    let obj 

    before(()=>{
        cy.fixture('ex2.json').then(function(pqr){
            obj = pqr
        })
    })

    it.only('verify the fixture with obj value', function () {
        
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type(obj[0].firstName)
        cy.get('[name="last_name"]').type(obj[0].lastName)
        cy.get('[name="email"]').type(obj[0].email)
        cy.get('textarea.feedback-input').type(obj[0].email)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')
        })

        it.only('verify the fixture with obj value', function () {
        
            cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(obj[1].firstName)
            cy.get('[name="last_name"]').type(obj[1].lastName)
            cy.get('[name="email"]').type(obj[1].email)
            cy.get('textarea.feedback-input').type(obj[1].email)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('be.visible')
            })
        
    })


