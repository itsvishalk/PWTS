import { test, expect} from '@playwright/test'

test ('TableDEMO', async({page})=>{

await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');

const allcolums = await page.locator('thead tr th');

 const columscount = await allcolums.count();
 console.log(" Total Columns " + columscount);

 expect(columscount).toBe(4);


 const allrows = await page.locator('tbody tr');
 const rowscount = await allrows.count();
 console.log("rowsnumbers = " + rowscount );


 await page.waitForTimeout(5000);







})