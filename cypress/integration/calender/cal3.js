///<reference types = "cypress"/>
describe('verify the date with calender',function(){
    it('TC-1',()=>{      

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()

        let aa = new Date()
        aa.setDate(aa.getDate()+2)
        
        let yr = aa.getFullYear()
        let mth = aa.getMonth()
        let daystr = aa.toLocaleDateString('default',{month:'long'})

        console.log(yr)
        console.log(mth)
        console.log(daystr)
            
            function cc(){
                cy.get('.datepicker-switch').first().then((el)=>{
                    cy.log(el.text())
                    if(!el.text().includes(yr)){
                        cy.get('.next').first().click()
                        cc()
                    }
                    
                })
                    cy.get('.datepicker-switch').first().then((el)=>{
                        if(!el.text().includes(daystr)){
                            cy.get('.next').first().click()
                            cc()
                        }
    
                        
                    })


                    // function forday(){
                    //     cy.contains('')
                    // }

                    // forday()

                

                

            }

            
            cc()    
        


    })
})