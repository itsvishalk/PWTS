import {test, expect} from '@playwright/test'


test ('Validate Page Title',async ({page})=>{

await page.goto('https://www.demoblaze.com/')

await expect (page).toHaveTitle('STORE');


})