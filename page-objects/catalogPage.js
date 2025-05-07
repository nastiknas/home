import Base from "./base";
const { expect } = require('@playwright/test');
  
class CatalogPage extends Base {
    constructor(page) {
        super(page);
    }

get catalogButton() {
    return this.page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//button[@class="btn btn-brand header-catalog-btn catalog-btn rounded-1"]');
}
async goTocatalogPage() {
    await this.catalogButton.click();
}

get mainCatalogButton() {
    return this.page.locator('//a[@class="nav-link justify-content-center align-items-center d-none d-lg-flex"]');
}
    async goToMainCatalogPage() {
    await this.mainCatalogButton.hover();
}

    get catalogNovelvesPage() {
        return this.page.locator('(//span[@class="text-muted fw-light"])[1]');
        }
        async goToCatalogNovelvesPage() {
        await this.catalogNovelvesPage.click();

    }
    get catalogAllCategoriesPage() { 
        return this.page.locator('//div[@class="col-12 col-lg-4"]');
    }

    async catalogAllCategoriesPageIsVisible() {
        await expect(this.catalogAllCategoriesPage).toBeVisible(); 
    }

    get catalogFiltersBlock() { 
        return this.page.locator('//div[@class="col catalog-filters__block"]');
    }

    async catalogFiltersBlockIsVisible() {
        await expect(this.catalogFiltersBlock).toBeVisible(); 
    }


    
get noProductsBlock() { 
    return this.page.locator('//div[@class="col-md-12 text-center"]');
}

async noProductsBlockIsVisible() {
    await expect(this.noProductsBlock).toBeVisible(); 
}
  
    }

export {CatalogPage}