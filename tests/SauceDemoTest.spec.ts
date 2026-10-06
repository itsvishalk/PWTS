import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/loginPage'
import { ProductListpage } from '../Pages/Productlistpage';
test('ValidateLogin', async ({ page }) => {



    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(3000);


})

test('addtocartpage', async ({ page }) => {


    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(3000);
    const addtocartpage = new ProductListpage(page);

    await addtocartpage.clickAddtoCartButton();
    expect(await addtocartpage.cartBadgeIcon).toHaveText('1');
    await addtocartpage.clickCartIcon();
    await page.waitForTimeout(3000);



})