import {test}  from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("User should open Login Popup",async ({page})=>{

    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await page.waitForTimeout(5000);

})


