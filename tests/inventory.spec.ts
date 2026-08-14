import {test} from "../fixtures/testFixtures";
import { InventoryPage } from "../pages/InventoryPage";



test("User should see Inventory page after login", async ({loggedInPage})=>{

    const inventoryPage= new InventoryPage(loggedInPage);
    await inventoryPage.verifyInventoryPageLoaded();

});

test("User should be able to sort products by price low to high", async ({loggedInPage})=>{

    const inventoryPage = new InventoryPage(loggedInPage);
    await inventoryPage.sortProductByPriceLowToHigh();

    await inventoryPage.verifyProductsSortedByPriceLowToHigh();
    
});

test("User should be able to sort product by name Z to A", async ({loggedInPage})=>{

    const inventoryPage = new InventoryPage(loggedInPage);
    await inventoryPage.sortPorductByNameZToA();

});

test("User should be able to sort product by name A to Z", async ({loggedInPage})=>{

    const inventoryPage = new InventoryPage(loggedInPage);
    await inventoryPage.sortProductByNameAToZ();

});

test("User should be able to sort products by price high to low", async ({loggedInPage})=>{

    const inventoryPage = new InventoryPage(loggedInPage);
    await inventoryPage.sortPorductByPriceHighToLow();

    await inventoryPage.verifyProductSortedByPriceHighToLow();

    
});