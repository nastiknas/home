const { expect } = require('@playwright/test');

class Randomizer  {
  constructor(page) {
    this.page = page;

    
    this.productTitleSelector = '//h1[@class="product__title mb-3"]';
    this.loadMoreButtonSelector = 'button.load-more'; // Селектор кнопки подгрузки
    this.addToCartButtonSelector = '//button[@class="btn btn-brand cart__btn-add"]'; // Селектор кнопки добавления в корзину
}

get productImages() {
    return this.page.locator('//div[@class="col-1 product__image"]'); 
}

async clickRandomProductImage() {
    
    const count = await this.productImages.count();
    const randomIndex = Math.floor(Math.random() * count);
    await this.productImages.nth(randomIndex).click();

}

async getProductImageUrls() {
    return await this.productImages.evaluateAll(images => images.map(img => img.src));
}


get categoryLocator() {
    return this.page.locator('//a[@type="button"]'); 
}

async clickRandomCategoryLocator() {
    const categoryCount = await this.categoryLocator.count();

    const randomIndex = Math.floor(Math.random() * categoryCount);
    await this.categoryLocator.nth(randomIndex).click();

}













}
export  {Randomizer};

