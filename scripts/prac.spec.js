import {test, expect} from '@playwright/test';


test.beforeEach(async ({page})=>{ //sync the sauchdemo.com
//test('open soucedemo',async ({page})=>{
    await page.goto('https://www.saucedemo.com') //open website
    await page.waitForTimeout(3000);

})

test('login, search and add product to cart, goto cart and place order', async({page})=>{

    await page.getByPlaceholder('Username').fill('standard_user');  //place username
    await page.waitForTimeout(3000);

    await page.getByPlaceholder('Password').fill('secret_sauce'); //place password
    await page.getByRole('Button', {name: 'Login'}).click(); //click on login
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible(); //verify product page is visible

   await page.locator('[data-test="product-sort-container"]').selectOption('lohi')
  //  await page.waitForTimeout(3000);

  //  await expect(page).toHaveText('Sauce Labs Onesie');
    await page.getByRole('button',{name:'Add to cart'}).first().click();
    await page.waitForTimeout(1000);

   await expect(page.locator('.shopping-cart-link')).toHaveText('1');


  
})
