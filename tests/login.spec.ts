import {test}  from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("User should open Login Popup",async ({page})=>{

    await page.goto("https://bookcart.azurewebsites.net/");

    const loginPage = new LoginPage(page);

    await loginPage.clickLoginButton();

})


