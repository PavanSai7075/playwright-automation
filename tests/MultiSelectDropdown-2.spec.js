const {test, expect} = require('@playwright/test');
const { clear } = require('node:console');


test('handle inputbox', async ({page}) =>{
     await page.goto('https://testautomationpractice.blogspot.com/');
    //To select multiple options from the dropdown
     await page.selectOption("#animals",["Cat","Dog","Lion"]);
    

     //const Options = page.$$("animals option"); //JavaScript array code to get all the options from the dropdown
     //await expect(Options.length).toBe(10);

   const options = await page.locator("#animals option");
   await expect(options).toHaveCount(10);

     const content = await page.textContent("#animals");
     await expect(content.includes("Cat")).toBeTruthy();
     await expect(content.includes("Dog")).toBeTruthy();
     await expect(content.includes("Lion")).toBeTruthy(); 
     await page.waitForTimeout(5000);
    

});
