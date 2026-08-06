import {Page,Locator} from '@playwright/test'

export class LoginPage{

    readonly loginButton:Locator;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly submitLoginButton:Locator;

    constructor (private page: Page){
        this.loginButton=this.page.getByRole('button',{name:'Login'});
        this.usernameInput=this.page.getByPlaceholder('Username');
        this.passwordInput=this.page.getByPlaceholder('Password');
        this.submitLoginButton=this.page.locator("form").getByRole('button',{name:'Login'});
    }



    async clickLoginButton(){
        await this.loginButton.click();
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
