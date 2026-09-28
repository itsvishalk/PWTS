import { test, expect } from '@playwright/test';

test('LoginTest',async ({page})=>{

await page.goto('https://practicetestautomation.com/practice-test-login/');
await expect(page).toHaveTitle('Test Login | Practice Test Automation');  
await page.getByLabel('username').fill('student');
await page.getByLabel('password').fill('Password123');
await page.getByRole ('button',{name:'Submit'}).click();
await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

await page.getByRole('link',{name:'Log out'}).click();
await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');


await page.waitForTimeout(5000);

})