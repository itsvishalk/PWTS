import {test, expect } from '@playwright/test'

test ('autosuggest', async({page})=>{

await page.goto('https://www.youtube.com/@LetsLearnQA');


await page.getByPlaceholder('Search').fill('playwright');

await page.waitForSelector('.ytSearchboxComponentClearButtonWrapper');

const allsuggestion = await page.locator('.ytSearchboxComponentClearButtonWrapper');

const count = await allsuggestion.count();

for(  let i = 0; i <  count ; i++ ) 
    {

        const text = await allsuggestion.nth(i).textContent();
     console.log(text);



}

await page.waitForTimeout(8000)


})