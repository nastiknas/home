import Base from "./base";

const { expect } = require('@playwright/test');
  
class LoginPage extends Base {
    constructor(page) {
        super(page);
        this.page = page;
        this.alertLocator = '//div[@class="alert alert-success fade show mb-0 alert-dismissible mb-2"]';
  
    }
  
    get fullnameInput() {
      return this.page.locator('//input[@id="full_name"]');
    }
  
    get emailInput() {
      return this.page.locator('//input[@id="email"]');
    }

    get passwordInput() {
      return this.page.locator('//input[@id="password"]');
    }

  
    get cityInput() {
        return this.page.locator('//input[@id="city"]');
      }


      get dropdownPhoneInput() {
        return this.page.locator('//span[@id="select2-phone_code-8y-container"]'); // Доработать
    }

        async selectOption(optionValue) {
        await this.dropdownPhoneInput.selectOption(BY); // Выбор значения из dropdown
    }

        async getSelectedOption() {
        return await this.dropdownPhoneInput.inputValue(); // Получение выбранного значения
    }


    get phoneInput() {
        return this.page.locator('//input[@id="phone"]');
      }

    get messageInput() {
        return this.page.locator('//textarea[@id="message"]');
      }

      get submitButton() {
        return this.page.locator('(//button[@type="submit"])[2]'); 
      }

        async clickSubmitButton() {
        await this.submitButton.click(); 
      }

      async isAlertVisible() {
        const alert = await this.page.locator(this.alertLocator);
        return alert.isVisible();
    }

  
    async sellYourProduct(fullname, email, city, phone, message) {
      await this.fullnameInput.fill(fullname);
      await this.emailInput.fill(email);
      await this.cityInput.fill(city);
      await this.phoneInput.fill(phone);
      await this.messageInput.fill(message);
      //await this.submitButton.click();
    }

    async loginToSite(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.submitButton.click();

    }


    get surnameIndividualInput() {
      return this.page.locator('//input[@id="surname-individual"]');
    }

    get nameIndividualInput() {
      return this.page.locator('//input[@id="name-individual"]');
    }

    get phoneIndividualInput() {
      return this.page.locator('//input[@id="phone_individual"]');
    }

  get passwordIndividualInput() {
    return this.page.locator('//input[@id="password"]');
  }

  get passwordConfirmIndividualInput() {
    return this.page.locator('//input[@id="password-confirm-individual"]');
  }

  get emailIndividualInput() {
    return this.page.locator('//input[@id="email-individual"]');
  }

  get dropdownCountryInput() {
    return this.page.locator('//span[@id="select2-country_id-container"]'); // Доработать
}

 ///   async selectCountryOption(optionValue) {
 //   await this.dropdownCountryInput.click(); // Выбор значения из dropdown
//}

 //   async getSelectedCountryOption() {
 //   return await this.dropdownCountryInput.inputValue(); // Получение выбранного значения
//}

async selectOptionByText(text) {
  await this.dropdownCountryInput.selectOption({ label: text }); // Выбор по тексту метки
}

async getSelectedOptionText() {
    // Получаем текст выбранной опции
    return await this.dropdownCountryInput.locator('option:checked').textContent();
}


get submitIndividualButton() {
  return this.page.locator('//div[@class="col-md-6 offset-md-4"]//button[@class="btn btn-success"]');
  }
  async clickSubmitIndividualButton() {
  await this.submitIndividualButton.click();

}


    async individualRegistration(surname, name, phone, country, email, password, passwordconfirm) {
      await this.surnameIndividualInput.fill(surname);
      await this.nameIndividualInput.fill(name);
      await this.emailIndividualInput.fill(email);
      await this.phoneIndividualInput.fill(phone);
      await this.selectCountryOption(country); 
      await this.passwordIndividualInput.fill(password);
      await this.passwordConfirmIndividualInput.fill(passwordconfirm);
     // await this.submitButton.click();

    }





  get goToIndividualRegistration() {
     return this.page.locator('//a[@id="individual-tab"]'); 
  }

    async clickIndividualRegistration() {
    await this.goToIndividualRegistration.click(); 
  }


    async phoneInputPlaceholder() {
      return await this.phoneInput.getAttribute('placeholder'); // Убрала value
  }

  async messageInputPlaceholder() {
      return await this.messageInput.getAttribute('placeholder');
  }

    get invalidFeedbackLocator() { 
        return this.page.locator('//span[@class="invalid-feedback"]');
    }
    
    async invalidFeedbackLocatorIsVisible() {
        await expect(this.invalidFeedbackLocator).toBeVisible(); 
    }

    get invalidFeedbackAlert() { 
      return this.page.locator('//div[@class="alert alert-danger fade show mb-0 alert-dismissible mb-2"]');
  }
  
  async invalidFeedbackAlertIsVisible() {
      await expect(this.invalidFeedbackAlert).toBeVisible(); 
  }










  }
  
  export {LoginPage}


