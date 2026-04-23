const {test, expect} = require('@playwright/test');
const { clear } = require('node:console');


test('handle inputbox', async ({page}) =>{
     await page.goto('https://testautomationpractice.blogspot.com/');
    //Input box - Name 
    //checks to be done before executing the input boxes 
    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();
    await page.locator("//input[@id='name']").fill("Pavan");
    
    
    //Input box - Email
       
    await expect(await page.locator("//input[@id='email']")).toBeVisible();
    await expect(await page.locator("//input[@id='email']")).toBeEmpty();
    await expect(await page.locator("//input[@id='email']")).toBeEditable();
    await expect(await page.locator("//input[@id='email']")).toBeEnabled();
    await page.locator(" //input[@id='email']").fill("pavansaikoyalkar59@gmail.com");

    await page.waitForTiemout(10000); //pausing code
})
 
