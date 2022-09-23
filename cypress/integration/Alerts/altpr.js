///<reference types ="cypress"/>
describe('verify the js alerts',function(){
    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })

    it('TC-1',function(){
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert',function(str){
            expect(str).to.equal("I am an alert box!")
        })

    })

    it('TC-2',function(){
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm',function(){
            expect(str).to.equal('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')
        
    })


    it('TC-3',function(){
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm',function(str){
            expect(str).to.equal('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed OK!')
        
    })

    it.only('TC-4',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(obj){
            cy.stub(obj,'prompt').returns('hello')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: hello')
    })
})