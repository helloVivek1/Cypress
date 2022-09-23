let Allelelment = {
    login : 'input[name="username"]',
    password : 'input[name="password"]',
    button : '[type="submit"]'

}

export function login (username,password){
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get(Allelelment.login).type(username)
cy.get(Allelelment.password).type(password)
cy.get(Allelelment.button).click()


}
