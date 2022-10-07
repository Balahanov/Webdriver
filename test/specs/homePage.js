import homePage from "../pageobjects/page/home.page";
import { MainPage } from '../pageobjects/page/main.page';
const mainPage = new MainPage();

describe('Check home page navigation', () => {
    beforeEach(() => {
        homePage.open('');
        browser.setWindowSize(1920, 1080);
        homePage.getBanner().isDisplayed();
    });

    it('Navigate to the "Elements" page', async () => {
        await homePage.getCard('Elements').click();
        expect(browser).toHaveUrlContaining('/elements');
        await expect(mainPage.title()).toHaveText('Elements');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Forms" page', async () => {
        await homePage.getCard('Forms').click();
        expect(browser).toHaveUrlContaining('/forms');
        await expect(mainPage.title()).toHaveText('Forms');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Alerts, Frame & Windows" page" page', async () => {
        await homePage.getCard('Alerts, Frame & Windows').click();
        expect(browser).toHaveUrlContaining('/alertsWindows');
        await expect(mainPage.title()).toHaveText('Alerts, Frame & Windows');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Widgets" page', async () => {
        await homePage.getCard('Widgets').click();
        expect(browser).toHaveUrlContaining('/widgets');
        await expect(mainPage.title()).toHaveText('Widgets');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Interactions" page', async () => {
        await homePage.getCard('Interactions').click();
        expect(browser).toHaveUrlContaining('/interaction');
        await expect(mainPage.title()).toHaveText('Interactions');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Book Store Application" page', async () => {
        await homePage.getCard('Book Store Application').click();
        expect(browser).toHaveUrlContaining('/books');
        await expect(mainPage.title()).toHaveText('Book Store');
    });
});