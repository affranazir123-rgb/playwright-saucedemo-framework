import {test} from "@playwright/test";
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

test("User should be able to sort products by price low to high", async ({page})=>{


    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);


    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await inventoryPage.sortProductByPriceLowToHigh();

    await inventoryPage.verifyProductsSortedByPriceLowToHigh();
    
});

test("User should be able to sort product by name Z to A", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);


    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await inventoryPage.sortPorductByNameZToA();

});

test("User should be able to sort product by name A to Z", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);


    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await inventoryPage.sortProductByNameAToZ();

});

test("User should be able to sort products by price high to low", async ({page})=>{


    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);


    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickSubmitLoginButton();

    await inventoryPage.sortPorductByPriceHighToLow();

    await inventoryPage.verifyProductSortedByPriceHighToLow();

    
});