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

    async sortProductByPriceLowToHigh(){
        await this.sortDropDown.selectOption("lohi");
    }

    async verifyProductsSortedByPriceLowToHigh(){
        const prices = await this.productPrices.allTextContents();
        const numericPrices=prices.map(price=>Number(price.replace("$","")));
        const sortedPrices=[...numericPrices].sort((a,b)=>a-b);
        expect(numericPrices).toEqual(sortedPrices);

    }

    async sortPorductByNameZToA(){
        await this.sortDropDown.selectOption("za");
    }

    async sortProductByNameAToZ(){
        await this.sortDropDown.selectOption("az");
    }

    async sortPorductByPriceHighToLow(){
        await this.sortDropDown.selectOption("hilo");
    }

    async verifyProductSortedByPriceHighToLow(){
        const prices=await this.productPrices.allTextContents();
        const numericPrices=prices.map(price=> Number(price.replace("$","")));
        const sortedPrices = [...numericPrices].sort((a,b)=>b-a);
        expect(numericPrices).toEqual(sortedPrices);

    }
}

