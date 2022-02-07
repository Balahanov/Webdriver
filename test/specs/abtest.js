import { abtestPage, mainPage, abtestStep, mainStep } from '../pageobjects/index.js';

async function checkPageEl() {
    await expect(abtestPage.title).toBeDisplayed();
    await expect(abtestPage.pageText).toBeDisplayed();
    await expect(abtestPage.pageText).toHaveTextContaining(
        'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
    await expect(abtestPage.footer).toBeDisplayed();
    await expect(abtestPage.footer).toHaveTextContaining('Powered by');
    await expect(abtestPage.footer).toHaveTextContaining('Elemental Selenium')
}

describe('Check text content on the page', () => {

    it('Navigate to the page from main menu', async () => {
        await mainStep.open();
        await mainStep.clickLink('A/B Testing');
        /* let link = await mainPage.abtestLink
        await link.click(); */
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')
        await checkPageEl();
    });


    it.skip('Text content corresponds required', async () => {
        await abtestStep.open();
        await checkPageEl();
    });
});
