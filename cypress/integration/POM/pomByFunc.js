///<reference types ="cypress"/>
import  * as login from '../../support/MODLE/pomCammndByFunc'

describe('verify the login functionality',function(){
    it('verify the ORANGE HRM login ',function(){
        login.login("Admin","admin123")
    })
})