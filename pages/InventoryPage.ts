import {Page, Locator, expect} from "@playwright/test"

export class InventoryPage{
    readonly productsTitle: Locator;
    readonly productNames:Locator;
    readonly sortDropDown:Locator;
    readonly productPrices:Locator;
    readonly addToCartButtons:Locator;
    readonly cartButton:Locator;

    constructor (private page :Page){
        this.productsTitle=this.page.locator('.title');
        this.productNames=this.page.locator('[data-test="inventory-item-name"]');
        this.sortDropDown=this.page.locator('[data-test="product-sort-container"]');
        this.productPrices=this.page.locator('[data-test="inventory-item-price"]');
        this.addToCartButtons=this.page.locator('[data-test^="add-to-cart-"]');
        this.cartButton=this.page.locator('[data-test="shopping-cart-link"]');


    }

    async verifyInventoryPageLoaded(){
        await expect(this.productsTitle).toBeVisible(); 
    }

}

