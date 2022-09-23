///<reference types ="cypress"/>



describe('verify the action functionality',function(){
    Cypress.on("uncaught:exception",function(err,runnable){
        return false
    })

    it('To verify the Action functionality cypress',function(){
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove',{force:true}).trigger('mosueup',{force:true})
        cy.get('[id="droppable"] > p > b').should('have.text','Dropped!')
        //cy.get('#droppable > p > :nth-child(1)').should('have.text','Dropped!')
    })


    it('To verify the Action funtionality with class',function(){
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        let dataTransfer = new DataTransfer()
        cy.get('#draggable').trigger('dragstart',{dataTransfer})
        cy.get('#droppable').trigger('drop',{dataTransfer})
        cy.get('#draggable').trigger('dragend',{dataTransfer})
        cy.get('#droppable > p > b').should('contains','Dropped!')
        // cy.get('#droppable > p > :nth-child(1)').should('have.attr','style','background-color: rgb(244, 89, 80); height: 100%;')

    })
    // code will be short after using the plugin
    it('To verify the Action functionality with plugin',function(){
        cy.visit('https://demo.anhtester.com/drag-and-drop-demo.html')
        cy.get('#todrag > span').first().drag('#mydropzone')
    })
    

    // Double click scenario 
    it('check the functionality of doubleClick',function(){
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').as('dbClick')
        cy.get('@dbClick').should('have.class','div-double-click')
        cy.get('@dbClick').dblclick()
        cy.get('@dbClick').should('have.class','div-double-click double')
    })


    ////////////    Practice ///////////////////////////

    it('practice the drag and drop file ',function(){
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').last().trigger('mousemove',{force:true})
        cy.get('#droppable').last().trigger('mouseup',{force:true})
        cy.get('#droppable > p > b').should('contain','Dropped!')
    })

    it.only('new way to drag and drop',function(){
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').last().drag('#droppable',{force:true})
    })

})







