import Base from "../base";
const { expect } = require('@playwright/test');

class Search extends Base  {
  constructor(page)
     {super(page);
  }

  get searchInput() {
      return this.page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//input[@id="search"]'); 
   }

  get searchButton() {
    return this.page.locator('//button[@id="search-btn"]');
  }
  
  async clickSearchButton() {
    await this.searchButton.click(); 
  }

  get searchResults() {
    return this.page.locator('(//a[@class="stretched-link"])[1]'); 
  }

  async search(term) {
    await this.searchInput.fill(term);
  }

  async pressEnter() {
    await this.page.keyboard.press('Enter');
  }

  get buttonAllSearchResalt() {
    return this.page.locator('//div[@class="search-buttons mb-3"]'); 
  }

  async clickbuttonAllSearchResalt() {
    await this.buttonAllSearchResalt.click(); 
  }

  get clearButton() {
    return this.page.locator('//button[@id="search-clear-btn"]'); 
  }

async clearSearchButton() {
  await this.clearButton.click(); 
}

async getSearchInputValue() {
  return await this.searchInput.inputValue();
}

async clearSearch() {
  await this.searchInput.clear();
}

get searchResultsBreadCrumb() {
  return this.page.locator('//li[@class="breadcrumb-item active"]'); 
}

async searchResultsBreadCrumbIsVisible() {
  await expect(this.searchResultsBreadCrumb).toBeVisible(); 
}

async searchBreadCrumb(query) {
  await this.searchInput.fill(query);
  await this.searchInput.press('Enter');
}

  async checkSearchResultsBreadCrumbContainText(expectedText) {
    const searchResultsTexts = await this.searchResultsBreadCrumb.allTextContents();
    for (const text of searchResultsTexts) {
      expect(text).toContain(expectedText); 
    }
  }


get searchResultsInContainer() {
  return this.page.locator('//a[@class="stretched-link"]'); 
}

  async checksearchResultsInContainerContainText(expectedText) {
    const searchResultsTexts = await this.searchResultsInContainer.allTextContents();
    for (const text of searchResultsTexts) {
      expect(text).toContain(expectedText); 
    }
  }
  
async searchInputPlaceholder() {
  return await this.searchInput.getAttribute('placeholder');
}

}

export  { Search };