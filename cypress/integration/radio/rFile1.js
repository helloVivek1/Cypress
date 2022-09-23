///<reference types="cypress"/>

 

describe('To verfiy the radio button',function(){
    it('verify the radio button is checked',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').check().should('be.checked')
    })

    it('verify the each radio button is checked',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons').find('input[type="radio"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('verify the radio button is checked and other one is not checked',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })

    ///checkbox***********************************

    it('verify the checkbox is checked and uncheck method',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-3"]').should('be.checked')
        cy.get('input[value="option-3"]').click().should('not.be.checked')
        cy.get('input[value="option-3"]').click().should('be.checked')
    })

    it('verify the checkbox is checked',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').find('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
        
    })

    it('verify the checkbox is checked',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3'])
        
    })


    /// dropdown*******************************

    it('verify the functionality for the dropdown',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // cy.get('div[class="section-title"]').first().children().should('have.length',3)
        let value = ["python","maven","css"]
        cy.get('div[class="section-title"]').first().children().each(function(el,index){
            cy.wrap(el).select(value[index]).should('have.value',value[index])
        })    
    })


    it.only('verify the functionality for the dropdown',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //cy.get('div[class="section-title"]').first().children().should('have.length',3)
        let textvalue = ["PYTHON","MAVEN","CSS"]
        cy.get('div[class="section-title"]').first().children().each(function(el,index){
            cy.wrap(el).select(textvalue[index]).should('have.value',value[index])
        })    
    })


})