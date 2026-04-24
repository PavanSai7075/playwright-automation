const {test, expect} = require('@playwright/test');
const { clear } = require('node:console');


test('handle inputbox', async ({page}) =>{
     await page.goto('https://testautomationpractice.blogspot.com/');

    //Multile ways to handle dropdown
    //await page.locator('#country').selectOption({label:'India'}); // lable visible text 
    //await page.locator('#country').selectOption('Japan'); // label text
    //await page.locator('#country').selectOption({value:'china'}); // value object
    //await page.locator('#country').selectOption({index: 5}); // index number
    //await page.selectOption('#country','India'); // directly select option
    
    
    //Validations for Dropdowns - Assertions 
    //To check the number of options for dropdown - Approach 1
    //const dropDownOptions = page.locator('#country option');
    //await expect(dropDownOptions).toHaveCount(10);


    //Approach 2 - Get the list of options and then check the length of the list
    //const dropDownOptions = await page.$$('#country option');
    //console.log('Total number of options in dropdown: ' + dropDownOptions.length);
    //await expect(dropDownOptions.length).toBe(10);



    //To check the presence of specific option in dropdown - Approach 1
    //const content =await page.locator('#country').textContent();
    //await expect(content.includes('Greece')).toBeTruthy();

    //To check the presence of specific option in dropdown - Approach 2
    const dropDownOptions = await page.$$('#country option');
    const status = false;
    for(dropDownOption of dropDownOptions){
        const optionText = await dropDownOption.textContent();

    await page.waitForTimeout(5000);
    }
});
