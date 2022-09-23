///<reference types = "cypress"/>
describe('verify the JS Alerts', () => {
    it.only('verify the window:alert', () => {
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eql('I am an alert box!')
        })
    })

    it('verify the window:confirm alert', () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('be.visible', 'You pressed Cancel!')
    })

    it('verify the window:confirm alert', () => {
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('be.visible','You pressed OK!')
    })

    it('verify the window:prompt alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((obj) => {
            cy.stub(obj,'prompt').returns('Vivek')
        })

        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('contain', 'You entered: Vivek')

    })

})
