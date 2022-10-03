import { MainPage } from "./main.page";

class PracticeFormPage extends MainPage {
    /* Page elements */
    formTitle() {
        return $('[id="userForm"]').parentElement().$('h5');
    };
    firstNameInput() {
        return $('#firstName');
    };
    lastNameInput() {
        return $('#lastName');
    };
    emailInput() {
        return $('#userEmail');
    };
    genderRadiobutton(title) {
        return $('#genterWrapper').$(`[value="${title}"]`);
    };
    numberInput() {
        return $('#userNumber');
    };
    birthDate() {
        return $('#dateOfBirthInput');
    };
    subjectAutocomplete() {
        return $('#subjectsInput');
    };
    hobbiesCheckbox(title) {
        return $('#hobbiesWrapper').$(`label=${title}`);
    };
    addressInput() {
        return $('#currentAddress');
    };
    stateSelect() {
        return $('#state');
    };
    citySelect() {
        return $('#city');
    };
    uploadFile() {
        return $('#uploadPicture');
    };
    submitButton() {
        return $('#submit');
    };
    submitPopup() {
        return $('.modal-content');
    };
    titlePopup() {
        return $('#example-modal-sizes-title-lg');
    };
    inputedValuePopup(fieldName) {
        return this.submitPopup().$('tbody').$(`td=${fieldName}`).nextElement();
    };
    closePopupButton() {
        return $('#closeLargeModal');
    };

    /* Page steps */
    /* Default properties are declared in case input data is not important */
    async fillForm(fName = 'Test', lName = 'Test', email = 'email@test.qa', gender = 'Male',
        tNumber = '1234567890', subject = 'English', hobbie = 'Sports',
        address = 'New York, Central str. 55', state = 'Haryana', city = 'Panipat') {
        await this.firstNameInput().setValue(fName);
        await this.lastNameInput().setValue(lName);
        await this.emailInput().setValue(email);
        await this.genderRadiobutton(gender).click();
        await this.numberInput().setValue(tNumber);
        await this.subjectAutocomplete().setValue(`${subject}`);
        await this.hobbiesCheckbox(hobbie).click();
        await this.addressInput().setValue(address);
        await this.stateSelect().click();
        await this.stateSelect().$(`div=${state}`).click();
        await this.citySelect().click();
        await this.citySelect().$(`div=${city}`).click();
    };
    async validateForm(fName, lName, email, gender, tNumber, subject, address, state, city) {
        await expect(this.inputedValuePopup('Student Name')).toHaveText(`${fName} ${lName}`);
        await expect(this.inputedValuePopup('Student Email')).toHaveText(email);
        await expect(this.inputedValuePopup('Gender')).toHaveText(gender);
        await expect(this.inputedValuePopup('Mobile')).toHaveText(tNumber);
        await expect(this.inputedValuePopup('Subjects')).toHaveText(subject);
        await expect(this.inputedValuePopup('Address')).toHaveText(address);
        await expect(this.inputedValuePopup('State and City')).toHaveText(`${state} ${city}`);
    };
    async checkValidation(color) {
        const elements = {
            colorFirstName: await this.firstNameInput().getCSSProperty('border-color'),
            colorLastName: await this.lastNameInput().getCSSProperty('border-color'),
            colorEmail: await this.emailInput().getCSSProperty('border-color'),
            colorMobile: await this.numberInput().getCSSProperty('border-color'),
            colorGenderMale: await this.genderRadiobutton('Male').nextElement().getCSSProperty('color'),
            colorGenderFemale: await this.genderRadiobutton('Female').nextElement().getCSSProperty('color'),
            colorGenderOther: await this.genderRadiobutton('Other').nextElement().getCSSProperty('color'),
        };
        for (let key in elements) {
            await expect(elements[key].value).toEqual(color);
        };
    };
    open() {
        return super.open('automation-practice-form');
    };
}

export default new PracticeFormPage();