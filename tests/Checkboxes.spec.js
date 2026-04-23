const {test, expect} = require('@playwright/test');
const { clear } = require('node:console');


test('handle checkBoxes', async ({page}) =>{
     await page.goto('https://testautomationpractice.blogspot.com/');

    //single or specific checkboxes
    await page.locator("//input[@id='sunday' and @type='checkbox']").check();

    //await page.check("(////input[@id='sunday' and @type='checkbox']"); (alternate approach)

    expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeFalsy();


    //Multiple checkboxes
    const checkboxLocators=[
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']",
        "//input[@id='thursday' and @type='checkbox']"
                     ];
    for(const locator of checkboxLocators)  //select multiple check boxes 
    {
        await page.locator(locator).check();
    }

    await page.waitForTimeout(5000);

    for(const locator of checkboxLocators)  //unselect multiple check boxes which are already selected
    {
        if(await page.locator(locator).isChecked())
        await page.locator(locator).uncheck();
    }
    

})