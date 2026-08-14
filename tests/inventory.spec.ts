import {test as base} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

const test = base.extend<{
    loginPage: LoginPage;
}>({
    loginPage: async ({ page }, use) => {
        await page.goto("https://www.saucedemo.com/");

        const loginPage = new LoginPage(page);

        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickSubmitLoginButton();

        await use(loginPage);
    },
});

test("User should see Inventory page after login", async ({page,loginPage})=>{

    const inventoryPage= new InventoryPage(page);
    await inventoryPage.verifyInventoryPageLoaded();

});

test("User should be able to sort products by price low to high", async ({page,loginPage})=>{

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortProductByPriceLowToHigh();

    await inventoryPage.verifyProductsSortedByPriceLowToHigh();
    
});

test("User should be able to sort product by name Z to A", async ({page,loginPage})=>{

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortPorductByNameZToA();

});

test("User should be able to sort product by name A to Z", async ({page,loginPage})=>{

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortProductByNameAToZ();

});

test("User should be able to sort products by price high to low", async ({page,loginPage})=>{

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortPorductByPriceHighToLow();

    await inventoryPage.verifyProductSortedByPriceHighToLow();

    
});