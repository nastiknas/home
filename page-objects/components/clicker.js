import Base from "../base";

class Clicker extends Base {
  constructor(page) {
    super(page);
  }





async getFeedbackItemByName(itemName) {
  const items = {
    sellYourProduct: '//i[@class="fas fa-boxes-packing text-brand feedback__icon"]',

    
  }
  console.log(items[itemName])
  return items[itemName]
}

async goToFeedbackPageByName(itemName) {
  await this.page.locator(await this.getFeedbackItemByName(itemName)).click();


}



}


export  {Clicker};