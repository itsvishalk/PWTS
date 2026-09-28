import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

})

test.afterEach(async ({ page }) => {

    await page.locator('#react-burger-menu-btn').click();

    await page.locator('#logout_sidebar_link').click();

})

test('ValidateInventory', async ({ page }) => {


    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.waitForTimeout(3000);


})

test ( 'AddToCart', async({page})=>{


    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    expect ( await page.locator('#remove-sauce-labs-backpack')).toBeVisible();

    await page.waitForTimeout(3000);


})
