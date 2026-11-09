const {test, expect} = require('@playwright/test');


test ('Home Page', async ({page}) =>{
    await page.waitForTimeout(3000);
    await page.goto('https://www.arogga.com');
    
    await expect(page).toHaveURL('https://www.arogga.com')
    await page.waitForTimeout(3000);
})