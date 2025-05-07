import Base from "../base";

class LoadPage extends Base {
  constructor(page) {
    super(page);
    }


  get loadMoreButton() {
    return this.page.locator('button.load-more'); 
}

get productItems() {
    return this.page.locator('//div[@class="col-1 product__image"]'); 
}


  async loadAllPages() {

    let initialProductCount = await this.productItems.count();


    while (await this.loadMoreButton.isVisible()) {


        await this.loadMoreButton.click();


        await this.page.waitForResponse(response => {

            return response.request().method() === 'GET' && response.url().includes('/your-api-endpoint') && response.status() === 200

        });

        const currentProductCount = await this.productItems.count();



        expect(currentProductCount).toBeGreaterThan(initialProductCount);


        initialProductCount = currentProductCount;


    }



  }
}


  export  { LoadPage }