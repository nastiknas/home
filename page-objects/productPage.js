import Base from "./base";
const { expect } = require('@playwright/test');
class ProductPage extends Base {
  constructor(page) {
    super(page);
  }


get productImage() { 
    return this.page.locator('//div[@class="carousel slide"]');
}

async productImageIsVisible() {
    await expect(this.productImage).toBeVisible(); 
}


get blockPriceAndBalances() { 
    return this.page.locator('//div[@class="js-product-parameters product__parameters mb-3"]');
}

async blockPriceAndBalancesIsVisible() {
    await expect(this.blockPriceAndBalances).toBeVisible(); 
}


get blockCart() { 
    return this.page.locator('//div[@class="product__carts js-product__carts mb-4"]');
}

async blockCartIsVisible() {
    await expect(this.blockCart).toBeVisible(); 
}


get blockLabel() { 
    return this.page.locator('//div[@class="mb-2 d-none d-md-block"]');
}

async blockLabelIsVisible() {
    await expect(this.blockLabel).toBeVisible(); 
}



get productTitle() { 
    return this.page.locator('h1');
}

async productTitleIsVisible() {
    await expect(this.productTitle).toBeVisible(); 
}


get alertSuccess() { 
    return this.page.locator('//div[@class="alert alert-success fade show mb-0"]');
}

async alertSuccessIsVisible() {
    await expect(this.alertSuccess).toBeVisible(); 
}



get buttonAddToCart() {
    return this.page.locator('//button[@class="btn btn-brand cart__btn-add"]');
    }
    async clickButtonAddToCart() {
    await this.buttonAddToCart.click();

}

get plusButton() {
    return this.page.locator('//button[@class="btn btn-outline-secondary choose-quantity__plus"]');
    }
    async clickPlusButton() {
    await this.plusButton.click();

}

get minusButton() {
    return this.page.locator('//button[@class="btn btn-outline-secondary choose-quantity__minus"]');
    }
    async clickMinusButton() {
    await this.minusButton.click();
}

get inputAddToCart() {
    return this.page.locator('//input[@class="form-control choose-quantity__input"]');
    }


  //  async getQuantityValue() {
  //      const inputValue = await this.inputAddToCart.inputValue();
  //      return parseInt(inputValue, 10);
   //   }
   //   async checkQuantityGreaterThanZero() {  
   //     const numericValue = await this.getQuantityValue();
  
   //       expect(numericValue).toBeGreaterThan(0);
  
  //    }

  //    async checkQuantityEqualToZero() {  
  //      const numericValue = await this.getQuantityValue();
  
  //        expect(numericValue).toHaveValue('0');
  
  //    }



  async getCurrentQuantity() {

    const value = await this.inputAddToCart.inputValue();
    return parseInt(value, 10) || 0; // Возвращаем 0, если value пусто или не число

}


async increaseQuantity(times = 1) {

    for (let i = 0; i < times; i++) {

        await this.plusButton.click();

    }


}

async decreaseQuantity(times = 1) {
  for (let i = 0; i < times; i++) {
      await this.minusButton.click();

  }
}

async checkQuantityIncreased(previousQuantity, increaseAmount = 1) {
  const currentQuantity = await this.getCurrentQuantity();
  expect(currentQuantity).toBe(previousQuantity + increaseAmount);
}

async checkQuantityDecreased(previousQuantity, decreaseAmount = 1) {
  const currentQuantity = await this.getCurrentQuantity();
  expect(currentQuantity).toBe(previousQuantity - decreaseAmount);
}
}


export { ProductPage }


