///<reference types ="cypress"/>
describe('verify the coockies',function(){
    it('verify and set the coockies',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.setCookie('orangehrm','qa2 29d5dea7f16aee69db479ee63fc4b1445')
        // cy.setCookie('orangehrm','qa 9d5dea7f16aee69db479ee63fc4b1445').then(function(res){
        //     cy.log(res.value)
        // })
        // cy.clearCookie('orangehrm').then(function(res){
        // //    expect(res).to.equal(res.empty)
        // expect(res).to.equal(null)
        // })
        // cy.clearCookies()
        

        cy.window().then(function(win){
            win.localStorage.setItem('firstName','vivek')
        })

    })

})