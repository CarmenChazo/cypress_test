/// <reference types="cypress" />
import{MainPage} from '../page-objects/main'
import{LoginPage} from '../page-objects/login'
import{WelcomePage} from '../page-objects/welcome'



describe('TEST DE LOGIN',() => {
    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    const welcomePage = new WelcomePage()
      
    
    beforeEach(() => {
       
       mainPage.navigate()
       mainPage.clickLoginOption() 
          
    })
    it('A valid user can login', () =>{
        loginPage.fillUser("tomsmith")
        loginPage.fillPass("SuperSecretPassword!")
        loginPage.clickLoginOption()
        welcomePage.checkMessage("You logged into a secure area!")
    })
    it('A non valid password can no login', () =>{ 
        loginPage.fillUser("tomsmith")
        loginPage.fillPass("error!")
        loginPage.clickButtonLogin()
        welcomePage.checkMessage ("Your password is invalid!")
    })
    it('A non valid user can no login', () =>{ 

        loginPage.fillUser("Errorsmith")
        loginPage.fillPass("SuperSecretPassword!")
        loginPage.clickButtonLogin()
        welcomePage.checkMessage ("Your username is invalid!")
    })
    it('An empty valid user and password can no login', () =>{ 

        loginPage.fillUser(" ")
        loginPage.fillPass(" ")
        loginPage.clickButtonLogin()
        welcomePage.checkMessage ("Your username is invalid!")
    })  
})   