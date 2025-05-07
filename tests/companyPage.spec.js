import { test, expect } from '@playwright/test';
import {Navbar} from "../page-objects/components/navbar";

test.describe('Тесты страницы about company', async () => {


  test('Open page about company', async ({page}) => {
    const navbar = new Navbar(page);
    const response = await 

    await page.goto('/');
    await navbar.goToPageByName('company');

    expect(response.status()).toBe(200);
    expect(response.request().redirectedFrom());

    const h1 = await page.locator('h1');
        await expect(h1).toBeVisible();
    });
});