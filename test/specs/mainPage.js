import { MainPage } from "../pageobjects/page/main.page";
const mainPage = new MainPage();

describe('Check elements on the main page', () => {

    it('Check elements for "Elements" menu section', async () => {
        await mainPage.open('elements')
        await expect(browser).toHaveUrlContaining('/elements');
        await mainPage.checkHeaderElementsDisplayed();
        await mainPage.checkDropdownIsOpened('Elements');
        await mainPage.menuItem('Text Box').isDisplayed();
        await mainPage.menuItem('Check Box').isDisplayed();
        await mainPage.menuItem('Radio Button').isDisplayed();
        await mainPage.menuItem('Web Tables').isDisplayed();
        await mainPage.menuItem('Buttons').isDisplayed();
        await mainPage.menuItem('Links').isDisplayed();
        await mainPage.menuItem('Broken Links - Images').isDisplayed();
        await mainPage.menuItem('Upload and Download').isDisplayed();
        await mainPage.menuItem('Dynamic Properties').isDisplayed();
    });

    it('Check elements for "Forms" menu section', async () => {
        await mainPage.open('forms')
        await expect(browser).toHaveUrlContaining('/forms');
        await mainPage.checkHeaderElementsDisplayed();
        await mainPage.checkDropdownIsOpened('Forms');
        await mainPage.menuItem('Practice Form').isDisplayed();
    });

    it('Check elements for "Alerts, Frame & Windows" page" menu section', async () => {
        await mainPage.open('alertsWindows')
        await expect(browser).toHaveUrlContaining('/alertsWindows');
        await mainPage.checkHeaderElementsDisplayed();
        await mainPage.checkDropdownIsOpened('Alerts, Frame & Windows');
        await mainPage.menuItem('Browser Windows').isDisplayed();
        await mainPage.menuItem('Alerts').isDisplayed();
        await mainPage.menuItem('Frames').isDisplayed();
        await mainPage.menuItem('Nested Frames').isDisplayed();
        await mainPage.menuItem('Modal Dialogs').isDisplayed();
    });

    it('Check elements for "Widgets" menu section', async () => {
        await mainPage.open('widgets')
        await expect(browser).toHaveUrlContaining('/widgets');
        await mainPage.checkHeaderElementsDisplayed();
        await mainPage.checkDropdownIsOpened('Widgets');
        await mainPage.menuItem('Accordian').isDisplayed();
        await mainPage.menuItem('Auto Complete').isDisplayed();
        await mainPage.menuItem('Date Picker').isDisplayed();
        await mainPage.menuItem('Slider').isDisplayed();
        await mainPage.menuItem('Progress Bar').isDisplayed();
        await mainPage.menuItem('Tabs').isDisplayed();
        await mainPage.menuItem('Tool Tips').isDisplayed();
        await mainPage.menuItem('Menu').isDisplayed();
        await mainPage.menuItem('Select Menu').isDisplayed();
    });

    it('Check elements for "Interactions" menu section', async () => {
        await mainPage.open('interaction')
        await expect(browser).toHaveUrlContaining('/interaction');
        await mainPage.checkHeaderElementsDisplayed();
        await mainPage.checkDropdownIsOpened('Interactions');
        await mainPage.menuItem('Sortable').isDisplayed();
        await mainPage.menuItem('Selectable').isDisplayed();
        await mainPage.menuItem('Resizable').isDisplayed();
        await mainPage.menuItem('Droppable').isDisplayed();
        await mainPage.menuItem('Dragabble').isDisplayed();
    });

    it('Check elements for "Book Store Application" menu section', async () => {
        await mainPage.open('books')
        await expect(browser).toHaveUrlContaining('/books');
        await mainPage.checkHeaderElementsDisplayed();
        await mainPage.checkDropdownIsOpened('Book Store Application');
        await mainPage.menuItem('Login').isDisplayed();
        await mainPage.menuItem('Book Store').isDisplayed();
        await mainPage.menuItem('Profile').isDisplayed();
        await mainPage.menuItem('Book Store API').isDisplayed();
    });
});