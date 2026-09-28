import {test} from '@playwright/test';
 
test("ScreenShotDemo", async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/');

await page.waitForTimeout(3000);
//await page.screenshot({ path: 'Viewport.png'});

//await page.screenshot({ path: 'FullPage.png', fullPage: true });

const ele1 = await page.getByText('Get Started Free');
await ele1.screenshot({ path: 'ele1.png'});


    
        
   })