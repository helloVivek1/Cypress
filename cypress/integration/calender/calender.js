///<reference types = "cypress"/>
describe('verify the dates in calender', function () {

    it('TC-1 to verify the date with respective user', function () {
       
        let setdate = new Date()
        setdate.setDate(setdate.getDate() + 3)
        cy.log(setdate)      
        
        let year = setdate.getFullYear()
        let wordMonth = setdate.toLocaleString('default',{month: 'long'})
        let day = setdate.getDate()
        
        console.log(wordMonth)
        console.log(year)
        console.log(day)
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()

        function call() {
            cy.get('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    call()
                }

            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(wordMonth)) {
                        cy.get('.next').first().click()
                        call()
                    }

                })

            })

        }
        function selectday(){
            cy.contains('[class="day"]',day).click()
        }
       
        call()
        selectday()




    })

})
