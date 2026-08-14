import { test as base,Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export const test = base.extend<{
    loggedInPage: Page;
}>({
    loggedInPage: async ({ page }, use) => {

        await page.goto("https://www.saucedemo.com/");

        const loginPage = new LoginPage(page);

        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickSubmitLoginButton();

        await use(page);
    },
});