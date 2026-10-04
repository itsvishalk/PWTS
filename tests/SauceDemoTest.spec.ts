import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/loginPage'

test('ValidateLogin', async ({ page }) => {
    


    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.doLogin();


})