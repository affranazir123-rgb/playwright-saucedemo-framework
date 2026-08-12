import {test,expect}  from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("User should login successfully",async ({page})=>{

    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await loginPage.verifyloginSuccessful();

})

test("User should not login with invalid username",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername("user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await loginPage.verifyLoginError();

})

test("User should not login with invalid password",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("wrong_password");
    await loginPage.clickSubmitLoginButton();

    await loginPage.verifyLoginError();


})

test("User should not login with invalid username and password",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername("wrongusername");
    await loginPage.enterPassword("wrong_password");
    await loginPage.clickSubmitLoginButton();

    await loginPage.verifyLoginError();


})

test("User should not login with empty username", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await loginPage.verifyUsernameRequiredError();
});

test("User should not login with empty password",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername("standard_user");
    await loginPage.clickSubmitLoginButton();

    await loginPage.verifyPasswordRequiredError();

})

test("User should not login with empty username and password", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.clickSubmitLoginButton();

    await loginPage.verifyUsernameRequiredError();
})

test("User should not login with 'locked_out_user' username",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername("locked_out_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await loginPage.verifyLockedUserError();
})
