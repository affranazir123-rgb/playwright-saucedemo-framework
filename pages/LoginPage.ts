import {Page,Locator,expect} from '@playwright/test'

export class LoginPage{

    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly submitLoginButton:Locator;
    readonly productsTitle:Locator;
    readonly errorMessage:Locator;

    constructor (private page: Page){

    
        this.usernameInput=this.page.getByPlaceholder('Username')
        this.passwordInput=this.page.getByPlaceholder('Password')
        this.submitLoginButton=this.page.locator('.submit-button');
        this.productsTitle=this.page.locator('.title');
        this.errorMessage=this.page.locator('[data-test="error"]');
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
   
    async verifyloginSuccessful(){
        await expect(this.productsTitle).toBeVisible();
    }
}
