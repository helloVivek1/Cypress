
describe('verify the file upload ',function(){
    it('TC-1',function(){
        let img = "Capture.png"
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(img)
        cy.get('#submit-button').click()
        cy.url().should('contain',img)

    })

    it.only('Tc-2',function(){
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').selectFile([
            "cypress\fixtures\Capture1.png",
            "cypress\fixtures\Capture1.png"
        ],{action:'drag-drop'})
        cy.get('#submit-button').click()
    })
   
})
