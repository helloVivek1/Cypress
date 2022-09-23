///<reference types = "cypress"/>
describe('verify the confirm the alert',function(){
    it('TC-01 to check the alerts',function(){        
    cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
    cy.get('#button1').click()
    cy.on('window:alert',function(str){
        expect(str).to.equal('I am an alert box!')
    })
    })


    it('TC-02 to check the confirm alert for cancel',function(){
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm',function(str){
            expect(str).to.equal('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')

    })

    it('TC-03 to check the confirm alert for ok',function(){
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm',function(str){
            expect(str).to.equal('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed OK!')

    })

    it('TC-04  to check the alert for prompt',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(obj){
            //cy.log(obj)
            cy.stub(obj,'prompt').returns('hello')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text',"You entered: hello")
        
     

    })

    it('verify the alerts',function(){
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert',function(str){
            cy.expect(str).to.equal('I am an alert box!')
        })
    })

    it('verify the confirm alerts for click OK...!',function(){
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').last().click()
        cy.on('window:confirm',function(str){
            cy.expect(str).to.equal('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').last().should('have.text','You pressed OK!')

    })

    it('verify the confirm alerts for click cancel...!',function(){
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').last().click()
        cy.on('window:confirm',function(str){
            cy.expect(str).to.equal('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').last().should('have.text','You pressed Cancel!')
    })

    it('verify the prompt method by alerts',function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(obj){
            cy.stub(obj,'prompt').returns('hello')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain','You entered: hello')
    })

    

   




})