import {test, expect} from '../fixture/loginFixture'

 
test('ValidateLogin', async ({ page, loginpage }) => {



    //const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(3000);


})

test('addtocartpage', async ({ page, loginpage, productlistpage }) => {


    //const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(3000);
   // const addtocartpage = new ProductListpage(page);

    await productlistpage.clickAddtoCartButton();
    await expect(productlistpage.cartBadgeIcon).toHaveText('1');
    await productlistpage.clickCartIcon();
    await page.waitForTimeout(3000);



})