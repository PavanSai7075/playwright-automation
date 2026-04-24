const {test, expect} = require('@playwright/test');
const { clear } = require('node:console');


test('handle inputbox', async ({page}) =>{
     await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

   await page.locator('.multiselect').click();

   const options = await page.locator('.multiselect-container li');
}):
