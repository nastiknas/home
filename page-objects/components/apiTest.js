// page-objects/toolsByAPI.page.js
const { expect } = require('@playwright/test');


class ToolsByAPI {
    constructor(request) {
        this.request = request;

    }
    async get(path) {



        return await this.request.get(path); // baseURL уже включен в запрос


    }



    async checkStatus(response, expectedStatus = 200) {

        expect(response.status()).toBe(expectedStatus);

    }

    async checkTitle(response, expectedTitle) {
        expect(await response.text()).toContain(`<title>${expectedTitle}</title>`);
    }

    async checkLink(response, expectedLink) {
        expect(await response.text()).toContain(expectedLink);
    }

}


export { ToolsByAPI };

