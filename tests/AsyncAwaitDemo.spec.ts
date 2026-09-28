import { test, expect} from '@playwright/test'

test ('Async demo'  ,async ({page})=>
    {

await page.goto('https://bstackdemo.com/');

await page.waitForTimeout(4000)

await expect(page).toHaveTitle('StackDemo');





})