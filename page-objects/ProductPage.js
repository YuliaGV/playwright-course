const { expect } = require('@playwright/test');
import { Navigation } from './Navigation';

export class ProductPage {

    constructor(page) {
        this.page = page;
        this.addButtons = this.page.locator('[data-qa="product-button"]');
       
    }

    visit = async () => {
        await this.page.goto('/')
    };
    

    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index);
        await specificAddButton.waitFor();

        const navigation = new Navigation(this.page);

        await expect(specificAddButton).toHaveText('Add to Basket');
        const basketCountBeforeAdding = await navigation.getBasketCount();

        await specificAddButton.click();

        await expect(specificAddButton).toHaveText('Remove from Basket');
        const basketCountAfterAdding = await navigation.getBasketCount();
        expect(basketCountAfterAdding).toBeGreaterThan(basketCountBeforeAdding);
    };
}