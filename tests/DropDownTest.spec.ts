import { test, expect } from "@playwright/test";

test("DropDownTest", async ({ page }) => {
  await page.goto("https://www.testmuai.com/lp/demo/");

  const demoForm = page
    .locator("form")
    .filter({ has: page.getByRole("textbox", { name: "First Name" }) })
    .first();

  const productDropdown = demoForm.locator('div[class*="Modal_productSelect__"]').first();
  await expect(productDropdown).toBeVisible();
  await productDropdown.click();

  const option = page
    .locator('ul[class*="Modal_customSelectOptions__"] li[class*="Modal_customSelectOption__"]')
    .filter({ hasText: "Selenium Testing" })
    .first();

  await expect(option).toBeVisible();
  await option.click();

  await expect(demoForm.locator('input[name="product_interested_in"]')).toHaveValue("Selenium-Testing");
});