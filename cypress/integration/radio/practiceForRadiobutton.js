///<reference types= "cypress"/>
describe('verify the radio button',function(){
    it('verify the button with validation',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="green"]').check().should('be.checked')
        cy.get('[value="blue"]').should('not.be.checked')
    })



    it('verify the all radion buttons should be checked',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons').find('[type="radio"]').each(function(el,index){
            cy.wrap(el).check().should('be.checked')
        })
    })


    /////////////////////// CHECK BOX////////////////////////////////////

    it('verify the checkbox weather check or unchecked for option 1',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-1"]').should('not.be.checked')
    })

    it('verify the checkbox weather check or unchecked for option 3',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').click().should('not.be.checked')
    })
    it('verify the checkbox weather check or unchecked for option 1',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').find('[type="checkbox"]').each(function(el,index){
            cy.wrap(el).check().should('be.checked')
        })
    })


    //////////////////////////////  dropdown    ////////////////////////////////

    it('verify the dropdown button select by value',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let value = ["java","maven","css"]
        cy.get('[class="section-title"]').first().children().each(function(el,index){
            cy.wrap(el).select(value[index]).should('have.value',value[index])
        })
    })

    it.only('verify the dropdown button select by text',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let textValue = ["JAVA","MAVEN","CSS"]
        cy.get('div[class="section-title"]').first().children().each(function(el,index){
            cy.wrap(el).select(textValue[index]).should('have.value',values[index])
        })
    })
})