///<reference types="cypress"/>


describe('test case for select desire date',function(){
    it('verify the date ',function(){
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()
        let xyz = new Date
        xyz.setDate(xyz.getDate()+5)
        console.log(xyz)
        let year = xyz.getFullYear()
        let mntstr= xyz.toLocaleString('default',{month: 'long'})
        let date = xyz.getDate()

        console.log(year)
        console.log(mntstr)
        console.log(date)


        function call(){
            cy.get('.datepicker-switch').first().then(function(el){
                if(!el.text().includes(year)){
                    cy.get('.next').first().click()
                    call()
                }
            })
            cy.get('.datepicker-switch').first().then(function(el){
                if(!el.text().includes(mntstr)){
                    cy.get('.next').first().click()
                    call()
                }
            })


        }
        function dayselect(){
            cy.contains('td[class="day"]',date)
        }
        dayselect()

    })
})