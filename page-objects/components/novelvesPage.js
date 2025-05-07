
import Base from "../base";




class NovelvesPage extends Base {
    constructor(page) {
        super(page); 

  }

  get productsLocator() {
    return this.page.locator('//div[@class="col-1 product__image"]'); 
}

async productsLocatorIsVisible() {
    await expect(this.productsLocator).toBeVisible();
  }


  async selectRandomProduct() {
    //const count = await this.products.count();
    const count = await page.getByRole('//div[@class="col-1 product__image"]').count();
    const randomIndex = Math.floor(Math.random() * count);
    await this.products.nth(randomIndex).click();
  }
}

export  { NovelvesPage };
