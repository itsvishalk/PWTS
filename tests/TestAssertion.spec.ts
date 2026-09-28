import { test, expect } from '@playwright/test'

test('Assertion Test', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const textUser = await page.getByLabel('username');

    await expect(textUser).toBeVisible();
    await expect(textUser).toBeEnabled();

    const heading = await page.locator('h2');
    await heading.screenshot({ path: 'heading.png' });

    // await expect(heading).toHaveText('Test login');
    await expect(heading).toContainText('login');

    await textUser.fill('student');
    await page.getByLabel('password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    await expect(page).toHaveTitle(' Logged In Successfully | Practice Test Automation ');

    await page.waitForTimeout(5000);




})