const { test, expect } = require('@playwright/test');
const { ProductPage } = require('../page-objects/ProductPage');

test.only("New user full end-to-end test journey", async ({ page }) => {

    const productsPage = new ProductPage(page);
    await productsPage.visit();

    await productsPage.addProductToBasket(0);
    await productsPage.addProductToBasket(1);
    await productsPage.addProductToBasket(2);

  

});