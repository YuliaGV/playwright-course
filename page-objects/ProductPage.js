const { expect } = require('@playwright/test');

export class ProductPage {

    constructor(page) {
        this.page = page;
        this.addButtons = this.page.locator('[data-qa="product-button"]')
    }

    visit = async () => {
        await this.page.goto('/')
    };
    

    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index);
        await specificAddButton.click();
        await expect(specificAddButton).toHaveText('Add to basket');
        await specificAddButton.click();
        await expect(specificAddButton).toHaveText('Remove from basket');
    };
}