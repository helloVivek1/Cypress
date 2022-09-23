///<reference types = "cypress"/>





describe('verify the basic API functionality',function(){

    function callAPI(method,url,body,status){
        if(body != undefined){
            cy.request({
                method:method,
                url:url,
                body:body
            }).then(function(res){
                //cy.log(res)
                expect(res.status).to.equals(status)
            })

        }
        else{
            cy.request({
                method:method,
                url:url,
                }).then(function(res){
                //cy.log(res)
                expect(res.status).to.equals(status)
            })
        }
        
    }


    it('verify the GET request',function(){
        callAPI("GET","https://reqres.in/api/users?page=2",undefined,200)
    })

    it('verify the GET request API',function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(res){
            // cy.log(res)
            expect(res.status).to.equal(200)
        })
        

    })

    it('verify the Post request API',function(){
        cy.request({
            method:'POST',
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eql(201)
        })
    })

    it('verify the PUT request API',function(){
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "VIVEK",
                "job": "NEW"
            }
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eql(200)
        })
    })

    it('verify the DELETE request API',function(){
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2"
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eql(204)
        })
    })
//////////////////////////////  PRACTICE    ///////////////////////////////////////////

    // it.only('verify the GET request API',function(){
       
    //     cy.request({
    //         method: "GET",
    //         url: "https://reqres.in/api/users?page=2",
    // }).then(function(res){
    //     // cy.log(res)
    //     expect(res.status).to.equal(200)

    //     })
    // })

    // it('verify the post request API',function(){
    //     cy.request({
    //         method: "POST",
    //         url: "https://reqres.in/api/users",
    //         body: {
    //             "name": "vivek",
    //             "job": "Team-lead"
    //         }
    //     }).then(function(res){
    //         // cy.log(res)
    //         expect(res.status).to.equal(201)
    //     })
    // })


    // it.only('verify the PUT API',function(){
    //     cy.request({
    //         method : "PUT",
    //         url: 'https://reqres.in/api/users/2',
    //         body: {
    //             "name": "VIVEK",
    //             "job": "NEW"
    //         }

    //     }).then(function(res){
    //         // cy.log(res)
    //         expect(res.status).to.equal(200)
    //     })
    // })

    // it.only('verify the DELET API',function(){
    //     cy.request({
    //         method:"DELETE",
    //         url:'https://reqres.in/api/users/2',
    //     }).then(function(res){
    //         // cy.log(res)
    //         expect(res.status).to.equal(204)
    //     })
    // })



})