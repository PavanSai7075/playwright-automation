const {test, expect} = require('@playwright/test');
const { clear } = require('node:console');


test('handle inputbox', async ({page}) =>{
     await page.goto('https://testautomationpractice.blogspot.com/');
    //Select Multiple Options in a Dropdown

    await page.selectOption('#colors', ['red','blue']);
    // Assertions
    //(1)To check the number of the options in the dropdown 
    const Options = await page.locator('#colors option');
    await expect(Options).toHaveCount(7);

    //(2)To check the number of the options in the dropdown using JS Array
    //const Option = await page .$$("#colors option");
    //console.log("Number of Options are :", Option.length);
    //await expect(Option.length).toBe(7);

    
    //(3)To check the  presence of the options in the dropdown 
    const options =await page.locator("#colors").textContent();
    await expect(options).toContain("Red");
    await expect(options).toContain("Blue");

    await page.waitForTimeout(5000);


});