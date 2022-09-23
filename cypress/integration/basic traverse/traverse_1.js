///<reference types="cypress"/>

describe("perform the testcase by traverse method",()=>{
    it("To get children of DOM elements, use the .children() command",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get(".traversal-drinks-list").children().should('have.length',5)
    })

    it("To get a DOM element at a specific index, use the .first()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get(".traversal-drinks-list").children().first().should('have.attr','id','coffee')
    })

    it("To get a DOM element at a specific index, use the .eq()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get(".traversal-drinks-list").children().eq(2).should('contain','Milk')
    })

    it("To get a DOM element at a specific index, use the .last()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get(".traversal-drinks-list").children().last().should('contain','Sugar')
    })

    it("To get a DOM element at a specific index, use the .next()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get(".traversal-drinks-list").children().first().next().should('contain','Tea')
    })

    it("To get a DOM element at a specific index, use the .prev()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get(".traversal-drinks-list").children().last().prev().should('contain','Espresso')
    })

    it("To get a DOM element at a specific index, use the .nextAll()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get(".traversal-drinks-list").children().first().nextAll().should('have.length',4)
    })

    it("To get a DOM element at a specific index, use the .prevAll()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get("#sugar").prevAll().should('have.length',4)
    })

    it("To get a DOM element at a specific index, use the .next()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get("#coffee").nextUntil().should('have.length',4)
    })

    it("To get a DOM element at a specific index, use the .prevUntill()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get("#sugar").prevUntil().should('have.length',4)
    })

    it("To get a DOM element at a specific index, use the .find()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list').find('#tea').should('have.text','Tea')
    })

    it("To get a DOM element at a specific index, use the .not()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('input[type="radio"]').not('[disabled]').should('have.length',7)
    })

    it("To get a DOM element at a specific index, use the .filter()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('input[type="radio"]').filter('[disabled]').should('have.attr','value','cabbage')
    })

    it("To get a DOM element at a specific index, use the .parent()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#coffee').parent().should('have.attr','class','traversal-drinks-list')
    })

    it("To get a DOM element at a specific index, use the .parent()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#coffee').parents('div').should('have.attr','class','thumbnail')
    })

    it("To get a DOM element at a specific index, use the .parent()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#coffee').closest('ul').should('have.attr','class','traversal-drinks-list')
    })

    it.only("To get a DOM element at a specific index, use the .parent()",()=>{
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#coffee').parentsUntil('div[class="col-sm-12"]').should('have.length',2)
    })


})
