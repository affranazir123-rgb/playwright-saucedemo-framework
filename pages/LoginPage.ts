import {Page,Locator} from '@playwright/test'

export class LoginPage{

    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly submitLoginButton:Locator;

    constructor (private page: Page){

    
        this.usernameInput=this.page.getByPlaceholder('Username')
        this.passwordInput=this.page.getByPlaceholder('Password')
        this.submitLoginButton=this.page.locator('.submit-button');
    }



    async enterUsername(username:string){
        await this.usernameInput.fill(username);

    }

    async enterPassword(password:string){
        await this.passwordInput.fill(password);
    }

    async clickSubmitLoginButton(){
        await this.submitLoginButton.click();
    }
   
}
