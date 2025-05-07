// page.js

import Base from "../base";

class ImagePage extends Base {
  constructor(page) {
    super(page);

    }


    get loadMoreButtonSelector() {
        return this.page.locator('button.load-more'); 
     }

     get imageSelector() {
        return this.page.locator('//div[@class="col-1 product__image"]'); 
     }



    async loadAllImages() {
        let isLoaded = true;
        while (isLoaded) {
            if (await this.page.isVisible(this.loadMoreButtonSelector)) {
                await Promise.all([
                    this.page.click(this.loadMoreButtonSelector),
                    this.page.waitForTimeout(1000)
                ]);
            } else {
                isLoaded = false;
            }
        }
    }

    async chooseRandomImage() {
        await this.loadAllImages();
        const images = await this.page.$$(this.imageSelector);
        const randomIndex = Math.floor(Math.random() * images.length);
        await images[randomIndex].click();
    }
}


export  { ImagePage };