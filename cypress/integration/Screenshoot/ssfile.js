

describe('verify the screenshoot functionality',function(){
    // it('TC-1 take screenshoot in cypress',function(){
    //     cy.visit('https://www.youtube.com/')
    //     cy.screenshot('youtube')

    // })
    it('Tc-2 take screenshoot with desire components',function(){
        cy.visit('https://www.youtube.com/')
        // cy.screenshot('youtubeclip',{clip:{x:12,y:30,width:250,heigth:420}})
        // cy.screenshot("youtube1",{capture:"fullPage"}) 
        // cy.screenshot('youtube2',{capture:"runner"})
        // cy.screenshot('youtube2',{capture:"viewport"})

    })
    it.only('TC-3 ss with desire components',function(){
        cy.visit('https://www.youtube.com/')
        cy.get('[id="logo-icon"]').first().screenshot('youtube3')
    })
})