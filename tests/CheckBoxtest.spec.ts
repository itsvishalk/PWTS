import {test, expect} from '@playwright/test'

test ('checkbox', async({page})=>{

 await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');   
 await page.waitForTimeout(2000);

 const allcheckboxes = await page.locator('input[type="checkbox"]');
 await expect(allcheckboxes.first()).not.toBeChecked();
  
 await allcheckboxes.first().check();
 await page.waitForTimeout(2000);

 console.log(await allcheckboxes.first().isChecked());

 await allcheckboxes.first().uncheck();
console.log(await allcheckboxes.first().isChecked());

console.log (await allcheckboxes.nth(4).isEnabled());

 await page.waitForTimeout(5000);





})