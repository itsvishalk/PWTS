import { test } from '../fixture/loginFixture';

test('ClickProduct', async ({ loggedinpage }) => {

  await loggedinpage.getByText('Sauce Labs Backpack').click();

  await loggedinpage.waitForTimeout(3000);
});

test('ClickAddToCart', async ({ loggedinpage }) => {

  await loggedinpage
    .locator('#add-to-cart-sauce-labs-backpack')
    .click();

  await loggedinpage.locator('.shopping_cart_link').click();

  await loggedinpage.waitForTimeout(3000);
});