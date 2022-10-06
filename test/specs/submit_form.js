import practiceFormPage from "../pageobjects/page/practiceForm.page";
const path = require('path');

describe('Tests for form submition', () => {
    beforeEach(() => {
        practiceFormPage.open();
        browser.setWindowSize(1920, 1080);
    });

    it('Submit default form', async () => {
        await expect(practiceFormPage.title()).toHaveText('Practice Form');
        await expect(practiceFormPage.formTitle()).toHaveText('Student Registration Form');
        await practiceFormPage.fillForm('Test1', 'Test2', 'email1@test.qa', 'Male', '1234567891', 'English',
            'Sports', 'New York, Central str. 55', 'Haryana', 'Panipat');
        await practiceFormPage.submitButton().click();
        await practiceFormPage.submitPopup().isDisplayed();
        await expect(practiceFormPage.titlePopup()).toHaveText('Thanks for submitting the form');
        await practiceFormPage.validateForm('Test1', 'Test2', 'email1@test.qa', 'Male', '1234567891', 'English',
            'New York, Central str. 55', 'Haryana', 'Panipat');
        await practiceFormPage.closePopupButton().click();
    });

    it('Submit form with uploaded file', async () => {
        const filePath = path.join(__dirname, '../pageobjects/testdata/test_stream.mjpeg')
        await practiceFormPage.fillForm();
        await practiceFormPage.uploadFile().setValue(filePath);
        await practiceFormPage.submitButton().click();
        await expect(practiceFormPage.inputedValuePopup('Picture')).toHaveText('test_stream.mjpeg');
    });

    it('Check validation for form fields', async () => {
        const color = {
            green: 'rgb(40,167,69)',
            red: 'rgb(220,53,69)'
        };
        await practiceFormPage.submitButton().click();
        /* set value into Email field for triggering field validation */
        await practiceFormPage.emailInput().setValue('1');
        await browser.pause(100);
        await practiceFormPage.checkValidation(color.red);
        await practiceFormPage.fillForm();
        await browser.pause(100);
        await practiceFormPage.checkValidation(color.green);
    });
});