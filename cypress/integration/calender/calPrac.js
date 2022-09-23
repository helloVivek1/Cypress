///<reference types = "cypress"/>
describe('select the date', function () {
    it('To verify the date with calender', () => {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()

        let dateA = new Date()
        dateA.setDate(dateA.getDate() + 2)
        cy.log(dateA)

        let year = dateA.getFullYear()
        let month = dateA.getMonth()
        let day = dateA.getDay()
        let mthstr = dateA.toLocaleString('default', { month: 'long' })

        cy.log(year)
        cy.log(month)
        cy.log(day)
        cy.log(mthstr)



        function callA() {
            cy.get('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    callA()
                }
            })
            cy.get('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(mthstr)) {
                    cy.get('.next').first().click()
                    callA()
                }
            })


            function dayA() {
                cy.contains('[class="day"]', day).click()
            }
            dayA()

        }


        callA()


    })
})