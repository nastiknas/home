const { test } = require('@playwright/test');
import {ToolsByAPI} from "../../page-objects/components/apiTest";

test('Проверка статуса главной страницы', async ({ request }) => {
    const toolsByAPI = new ToolsByAPI(request);
    const response = await toolsByAPI.get('/'); 
    await toolsByAPI.checkStatus(response);
});

test.skip('Проверка заголовка главной страницы', async ({ request }) => {
    const toolsByAPI = new ToolsByAPI(request);
    const response = await toolsByAPI.get('/');
    await toolsByAPI.checkStatus(response);
    await toolsByAPI.checkTitle(response, '"Инструменты для бизнеса"');
});

test('Проверка наличия ссылки на страницу "О компании"', async ({ request }) => {
    const toolsByAPI = new ToolsByAPI(request);
    const response = await toolsByAPI.get('/');
    await toolsByAPI.checkStatus(response);
    await toolsByAPI.checkLink(response, 'href="http://devtest.tools.by/company"');
});


test('Проверка ответа API на запрос к несуществующей странице', async ({ request }) => {
    const toolsByAPI = new ToolsByAPI(request);
    const response = await toolsByAPI.get('/non-existent-page');
    await toolsByAPI.checkStatus(response, 404);
});
