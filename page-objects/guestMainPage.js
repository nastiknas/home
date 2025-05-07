import Base from "./base";
const { expect } = require('@playwright/test');

class GuestMainPage extends Base {
  constructor(page) {
    super(page);
}
    get logoImage() { 
      return this.page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//div[@class="col-auto"]//img[@class="h-100"]');
  }
  
  async logoImageIsVisible() {
      await expect(this.logoImage).toBeVisible(); 
  }
}
export {GuestMainPage}
