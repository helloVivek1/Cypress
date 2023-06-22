///<reference types = "cypress"/>
describe('verify the hook concept using some TC',function(){
    before(function(){
        cy.log('before block executed')
    })

    beforeEach(function(){
        cy.log('beforeEach block executed')
    })
    it('TC-1',function(){
        cy.log('TestCase first executed')
    })

    it('TC-2',function(){
        cy.log('Secand Test Case executed')
    })

    afterEach(function(){
        cy.log('afterEach block executed')
    })

    after(function(){
        cy.log('at last after block executed')
    })
})