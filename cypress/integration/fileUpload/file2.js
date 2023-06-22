///<reference types="cypress"/>

describe('file upload',()=>{
    it('single file upload ',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Capture1.jpg')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('contain','Capture1.jpg')

    })


    it('file upload and rename the file during operation',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Capture1.jpg',fileName:'Capture.jpg'})
        cy.get('#file-submit').click()
    })

    it('multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Capture1.jpg','Capture2.jpg'])
        cy.get('p > strong').last().should('contain','Files You Selected:')
    })

    it.only('multiple file upload whenever element present in shadowDom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Capture1.jpg')
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('Capture1.jpg')
    })
})