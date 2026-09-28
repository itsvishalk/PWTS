import { test, expect } from "@playwright/test";

test("AlertsDemo", async ({ page }) => {

    await page.goto(
        "https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/"
    );

    page.on("dialog", async dialog => {

        console.log("Alert message:", dialog.message());

        await dialog.dismiss();
    });

    await page.locator(
        '//*[@id="__next"]/div/main/section[2]/div/div/div/div[2]/div/p[1]/button'
    ).click();

    const result = page.locator("#confirm-demo");

    console.log("Result message:", await result.innerText());

    await expect(result).toHaveText("You pressed Cancel!");
});