import { test, expect } from '@playwright/test'
import loginData from '../TestData/LoginData.json'


test('Login Test', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.getByLabel('username').fill(loginData.username);
    await page.getByLabel('password').fill(loginData.password);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(5000);


})
