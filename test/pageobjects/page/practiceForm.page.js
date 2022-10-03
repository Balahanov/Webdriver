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
    submitButton() {
        return $('#submit');
    };
    /* Page steps */
    fillForm(fName = 'Test', lName = 'Test', email = 'email@test.qa', gender = 'Male',
        tNumber = '1234567890', subject = 'English{Enter}', hobbie = 'Sports',
        address = 'New York, Central str. 55', state = 'Haryana', city = 'Panipat') {
        this.firstNameInput().setValue(fName);
        this.lastNameInput().setValue(lName);
        this.emailInput().setValue(email);
        this.genderRadiobutton(gender).click();
        this.numberInput.setValue(tNumber);
        this.subjectAutocomplete.setValue(`${subject}{Enter}`);
        this.hobbiesCheckbox(hobbie).click();
        this.addressInput.setValue(address);
        this.stateSelect.setValue(state);
        this.citySelect.setValue(city);
        this.submitButton.click();
    }
    open(title) {
        return super.open(title);
    };
}

export default new PracticeFormPage();