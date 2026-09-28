import {test} from '@playwright/test'

test ('iframeTest', async({page})=>{


await page.goto('https://jqueryui.com/autocomplete/');

const myframe = await page.frameLocator('.demo-frame');

await myframe.locator('id=tags').fill('java');

await page.waitForTimeout(5000);



})