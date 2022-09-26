import { homePage, mainPage } from '../pageobjects/index.js';

describe('Check home page navigation', () => {

    it('Navigate to the "Elements" page', async () => {
        await homePage.open('');
        await homePage.getBanner().isDisplayed();
        await homePage.getCard('Elements').scrollIntoView();
        await homePage.getCard('Elements').click();
        await expect(browser).toHaveUrlContaining('/elements');
        await expect(mainPage.title()).toHaveText('Elements');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Forms" page', async () => {
        await homePage.open('');
        await homePage.getBanner().isDisplayed();
        await homePage.getCard('Forms').scrollIntoView();
        await homePage.getCard('Forms').click();
        await expect(browser).toHaveUrlContaining('/forms');
        await expect(mainPage.title()).toHaveText('Forms');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Alerts, Frame & Windows" page" page', async () => {
        await homePage.open('');
        await homePage.getBanner().isDisplayed();
        await homePage.getCard('Alerts, Frame & Windows').scrollIntoView();
        await homePage.getCard('Alerts, Frame & Windows').click();
        await expect(browser).toHaveUrlContaining('/alertsWindows');
        await expect(mainPage.title()).toHaveText('Alerts, Frame & Windows');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Widgets" page', async () => {
        await homePage.open('');
        await homePage.getBanner().isDisplayed();
        await homePage.getCard('Widgets').scrollIntoView();
        await homePage.getCard('Widgets').click();
        await expect(browser).toHaveUrlContaining('/widgets');
        await expect(mainPage.title()).toHaveText('Widgets');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Interactions" page', async () => {
        await homePage.open('');
        await homePage.getBanner().isDisplayed();
        await homePage.getCard('Interactions').scrollIntoView();
        await homePage.getCard('Interactions').click();
        await expect(browser).toHaveUrlContaining('/interaction');
        await expect(mainPage.title()).toHaveText('Interactions');
        await expect(mainPage.defaultDescription()).toHaveText('Please select an item from left to start practice.');
    });

    it('Navigate to the "Book Store Application" page', async () => {
        await homePage.open('');
        await homePage.getBanner().isDisplayed();
        await homePage.getCard('Book Store Application').scrollIntoView();
        await homePage.getCard('Book Store Application').click();
        await expect(browser).toHaveUrlContaining('/books');
        await expect(mainPage.title()).toHaveText('Book Store');
    });
});