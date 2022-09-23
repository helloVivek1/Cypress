///<reference types ="cypress"/>

describe("verify the API with gorest website",function(){
    it('verify the GET request',function(){
        let tokan = "-XGET https://gorest.co.in/public/v2/users"
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            Authorization:`Bearer ${tokan}`
            
        }).then(function(res){
            // cy.log(res.body)
            expect(res.status).to.equal(200)
            return res.body
            
        }).then(function(users){
            cy.log(users)
           let ab = users.filter(function(el){
                return el.name.includes("Aatreya Varma")
            })
            expect(ab[0]).to.have.property('name')
            
        })

    })
})