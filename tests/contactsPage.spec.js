import { test, expect } from '@playwright/test';
import {Navbar} from "../page-objects/components/navbar";

test.describe('Тесты страницы contacts', async () => {

  test('Open page contacts', async ({page}) => {
    const navbar = new Navbar(page);
    const response = await

    await page.goto('/');
    await navbar.goToPageByName('contacts');

    expect(response.status()).toBe(200);
    expect(response.request().redirectedFrom()).toBeNull();

    const h1 = await page.locator('h1');
        await expect(h1).toBeVisible();
    });
});