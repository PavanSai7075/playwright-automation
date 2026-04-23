const {test, expect} = require('@playwright/test');
const { clear } = require('node:console');

test('handle radiobutton', async ({page}) => {
     await page.goto('https://testautomationpractice.blogspot.com/');
    //Radio Button - Male
    //checks to be done  
    await page.locator("//label[normalize-space()='Male']").check();
    await expect(await page.locator("//label[normalize-space()='Male']")).toBeChecked();
    await expect(await page.locator("//label[normalize-space()='Male']").isChecked()).toBeTruthy;
    //Radio Button - Female
    await expect(await page.locator("//label[normalize-space()='Female']").isChecked()).toBeFalsy();
 
    await page.waitForTimeout(5000); //pausing code
})

 
