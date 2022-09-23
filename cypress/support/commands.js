["**/*.js","**/*.feature"]
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// Cypress.Commands.add('login', (username,lastname,email,message) => { 
//         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('[name="first_name"]').type(username)
//         cy.get('[name="last_name"]').type(lastname)
//         cy.get('[name="email"]').type(email)
//         cy.get('[name="message"]').type(message)
//         cy.get('[value="SUBMIT"]').click()

// })
Cypress.Commands.add('login', (uerId, password) => { 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(uerId)
        cy.get('[type="password"]').type(password)
        cy.get('[type="submit"]').click()
         })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
