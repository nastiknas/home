import Base from "../base";

class Randomizer extends Base {
  constructor(page) {
    super(page);

    this.productsSelector = '//div[@class="col-1 product__image"]'; // Селектор товара
    this.productTitleSelector = '//h1[@class="product__title mb-3"]';
    this.loadMoreButtonSelector = 'button.load-more'; // Селектор кнопки подгрузки
    this.addToCartButtonSelector = '//button[@class="btn btn-brand cart__btn-add"]'; // Селектор кнопки добавления в корзину
}


async loadAllProducts() {
    let isLoaded = true;
    while (isLoaded) {
      try {
        if (await this.page.isVisible(this.loadMoreButtonSelector)) {
          await this.page.click(this.loadMoreButtonSelector);
          await this.page.waitForTimeout(1000); // Ожидание подгрузки
          
          isLoaded = await this.page.evaluate(selector => {
            const button = document.querySelector(selector);
            return button !== null && !button.disabled;
          }, this.loadMoreButtonSelector);
  
        } else {
          isLoaded = false;
        }
      } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
        isLoaded = false;
      }
    }
  }



  async addRandomProductToCart() {
    await this.loadAllProducts();
    const products = this.page.locator(this.productsSelector);
    
    // Подождать, пока появятся продукты, и получить их
    await products.waitFor({ state: 'visible' });
    const productCount = await products.count();
  
    if (productCount === 0) {
      throw new Error('Нет доступных товаров');
    }
  
    const randomProductIndex = Math.floor(Math.random() * productCount);
    await products.nth(randomProductIndex).click();
  
    // Проверка загрузки страницы товара
    await this.page.locator(this.productTitleSelector).waitFor({ state: 'visible' });
    await this.page.locator(this.addToCartButtonSelector).waitFor({ state: 'visible' });
    await this.page.locator(this.addToCartButtonSelector).click();
  }
  
}
