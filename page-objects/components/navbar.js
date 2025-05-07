import Base from "../base";
const { expect } = require('@playwright/test');
class Navbar extends Base {
  constructor(page) {
    super(page);
    
  }

  async getNavBarItemByName(itemName) {
    const items = {
      main: '//div[@class="navbar__menu d-none d-lg-block py-1"]//li[@class="menu-item first"]',
      company: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="http://devtest.tools.by/company"]',
      brands: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="http://devtest.tools.by/brands"]',
      dealers: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="http://devtest.tools.by/dealers"]',
      node: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="http://devtest.tools.by/node"]',
      map: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="http://devtest.tools.by/delivery/map"]',
      contacts: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="http://devtest.tools.by/contacts"]',
      
    }
    console.log(items[itemName])
    return items[itemName]
  }

  async goToPageByName(itemName) {
    await this.page.locator(await this.getNavBarItemByName(itemName)).click();
  }

  get brandLocator() {
    return this.page.locator('//div[@class="card h-100"]'); 
 }


  async brandElementsCount() {
    return await this.brandLocator.count();

  }

  async checkBrandElementsCountGreaterThanOne() {
    const count = await this.brandElementsCount();
    expect(count).toBeGreaterThan(1);
  }

  get navNews() {
    return this.page.locator('//a[@class="text-sm-center nav-link "]'); 
}

async checkNavNewsCountGreaterThan(count) {
  const actualCount = await this.navNews.count();
  expect(actualCount).toBeGreaterThan(count);
}

get navCard() {
  return this.page.locator('//div[@class="card h-100 hover-shadow-sm"]'); 
}

async checkNavCardCountGreaterThan(count) {
const actualCount = await this.navCard.count();
expect(actualCount).toBeGreaterThan(count);
}


}

export  { Navbar };