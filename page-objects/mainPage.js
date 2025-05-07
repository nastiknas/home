import Base from "./base";
const { expect } = require('@playwright/test');
class MainPage extends Base {
  constructor(page) {
    super(page);
  }

    get bannerModule() { 
      return this.page.locator('//div[@id="carouselBannersHome"]');
  }
  
  async bannerModuleIsVisible() {
      await expect(this.bannerModule).toBeVisible(); 
  }

  get quickMenu() { 
    return this.page.locator('//div[@class="quick-links list-group d-none d-md-block"]');
}

async quickMenuIsVisible() {
    await expect(this.quickMenu).toBeVisible(); 
}



}
export {MainPage}

