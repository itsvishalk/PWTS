// import { test as base, Page } from '@playwright/test';

// type MyFixture = {
//   loggedinpage: Page;
// };

// export const test = base.extend<MyFixture>({
//   loggedinpage: async ({ page }, use) => {

//     await page.goto('https://www.saucedemo.com/');

//     await page.getByPlaceholder('Username').fill('standard_user');

//     await page.getByPlaceholder('Password').fill('secret_sauce');

//     await page.getByRole('button', { name: 'Login' }).click();

//     await use(page);
//   },
// });