import Base from "../base";
const { expect } = require('@playwright/test');


class Header extends Base {
  constructor(page) {
    super(page);
 }

get FeedbackButton() {
   return this.page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//i[@class="fas fa-comment"]'); 
}
    async goToFeedbackPage() {
    await this.FeedbackButton.click();
}


get sellYourProductsPage() {
    return this.page.locator('//div[@class="col-12 col-md-4"][1]'); 
}
    async goToSellYourProductsPage() {
    await this.sellYourProductsPage.click();
}

get supplierOfGoodsPage() {
    return this.page.locator('//a[@href="https://tools.by/feedback/supplier-of-goods"]'); 
}
    async goToSupplierOfGoodsPage() {
    await this.supplierOfGoodsPage.click();
}

get questionServiceSparePage() {
    return this.page.locator('//a[@href="https://tools.by/feedback/question-service-spare"]'); 
}
    async goToquestionServiceSparePage() {
    await this.questionServiceSparePage.click();
}

get loginEntrancePage() {
    return this.page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//div[@class="login dropdown"]'); 
}
    async goTologinEntrancePage() {
    await this.loginEntrancePage.click();
}

get registerPage() {
    return this.page.locator('//a[@class="small float-end"]'); 
}
    async goToregisterPage() {
    await this.registerPage.click();
}

get searchForm() {
    return this.page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//input[@id="search"]'); 
}
    async clickToSearchForm() {
    await this.searchForm.click();
}


get searchContainer() {
    return this.page.locator('//div[@class="search-main position-absolute top-100 show"]'); 
}
    async clickToSearchContainer() {
    await this.searchContainer.click();
}

async searchContainerIsVisible() {
    await expect(this.searchContainer).toBeVisible(); 
}

get feedbackSectionsLocator() {
    return this.page.locator('div.col-12.col-md-4'); 
 }


  async feedbackSectionsCount() {
    return await this.feedbackSectionsLocator.count();

  }

  async feedbackSectionsCountGreaterThanOne() {
    const count = await this.feedbackSectionsCount();
    expect(count).toBeGreaterThan(1);
  }





}


export  {Header};


