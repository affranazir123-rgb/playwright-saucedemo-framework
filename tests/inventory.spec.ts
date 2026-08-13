import {test,expect} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("User should see Inventory page after login", async ({page})=>{

    await page.goto("https://www.saucedemo.com/");


    const inventoryPage= new InventoryPage(page);
    const loginPage = new LoginPage(page);


    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();


    await inventoryPage.verifyInventoryPageLoaded();

});
