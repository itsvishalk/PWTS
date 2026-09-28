import { test, expect } from '@playwright/test'

 test('ValidateInventory', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const title = await expect(page).toHaveTitle('Swag Labs');

    await page.locator('#react-burger-menu-btn').click();

    await page.waitForTimeout(1000);

    await page.locator('#logout_sidebar_link').click();

    await page.waitForTimeout(3000);


})

test ( 'AddToCart', async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    expect ( await page.locator('#remove-sauce-labs-backpack')).toBeVisible();

    await page.locator('#react-burger-menu-btn').click();

    await page.waitForTimeout(1000);

    await page.locator('#logout_sidebar_link').click();

    await page.waitForTimeout(3000);




})

