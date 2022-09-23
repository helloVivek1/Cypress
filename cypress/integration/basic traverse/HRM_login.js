///<reference types ="cypress"/>

describe("login the HRM website",()=>{
    it ("TC01 login with valied id and password",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_dashboard_index > b').should('be.visible')
    })
})