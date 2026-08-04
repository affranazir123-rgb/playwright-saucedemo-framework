import {Page,Locator} from '@playwright/test'

export class LoginPage{

    readonly loginButton:Locator;

    constructor (private page: Page){
        this.loginButton=page.getByRole('button',{name:'Login'});


    }
    async clickLoginButton(){
        await this.loginButton.click();
    }

   
}
