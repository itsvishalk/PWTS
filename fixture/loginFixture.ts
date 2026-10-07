import { Page, test as base } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { ProductListpage } from '../Pages/Productlistpage';

type myFixture = {

    loginpage: LoginPage;
    productlistpage: ProductListpage;
    loggedinpage: Page;


}
export const test = base.extend<myFixture>({


    loginpage: async ({ page }, use) => {

        await use(new LoginPage(page));

    },

    productlistpage: async ({ page }, use) => {

        await use(new ProductListpage(page));

    },

    loggedinpage: async ({ page, loginpage }, use) => {

        await loginpage.openApplication();
        await loginpage.doLogin();
        await use(page);

    }



})
export { expect } from '@playwright/test'