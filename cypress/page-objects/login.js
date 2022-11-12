export class LoginPage {
  
    fillUser (text) {
        cy.get('#username').type(text)
    }


    fillPass (text){
        cy.get('#password').type(text)
    }

    clickLoginOption() {
        cy.get(".fa").click()
    }

} 

