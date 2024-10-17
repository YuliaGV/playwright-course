const { expect } = require('@playwright/test');

export class Navigation{

    constructor(page) {
        this.page = page;
        this.basketCounter = this.page.locator('[data-qa="header-basket-count"]')

    }

    getBasketCount = async () => {
        await this.basketCounter.waitFor();
        const text =  await this.basketCounter.innerText();
        return parseInt(text, 10);
    };

}