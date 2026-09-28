import { test, expect} from '@playwright/test'


test ('Check Locators',async({page})=>{

await page.goto('https://practicetestautomation.com/practice-test-login/');
//await page.getByRole ('button',{name:'Submit'}).click();
//await page.getByRole ('link',{name:'Blog'}).click();
//await page.getByText ('Get Started Free ').click();
//await page.getByPlaceholder('Username').fill('Admin');
//await page.getByPlaceholder('Password').fill('admin123');
//await page.getByRole('button',{name:'Login'}).click();

await page.getByLabel('username').fill('student');
await page.getByLabel('password').fill('Password123');
await page.getByRole ('button',{name:'Submit'}).click();

await page.waitForTimeout(7000);

})