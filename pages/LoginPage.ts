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

    async verifyLoginError(){
        await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }

    async verifyUsernameRequiredError(){
        await expect(this.errorMessage).toHaveText('Epic sadface: Username is required');
        
    }

    async verifyPasswordRequiredError(){
        await expect(this.errorMessage).toHaveText('Epic sadface: Password is required');
    }

    async verifyLockedUserError(){
        await expect(this.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    }

}
