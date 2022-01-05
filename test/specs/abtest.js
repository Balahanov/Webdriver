import { abtestPage } from "../pageobjects/page/index.js";
import { abtestStep } from "../pageobjects/step/index.js";

describe('Check text content on the page', () => {
    beforeEach(async () => {
        await abtestStep.open();
    });

    it('Text content corresponds required', async () => {

        await expect(abtestPage.title).toBeDisplayed();
        //await expect(abtestPage.title).toHaveTextContaining('A/B Test Control');
        await expect(abtestPage.pageText).toBeDisplayed();
        await expect(abtestPage.pageText).toHaveTextContaining(
            'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
        await expect(abtestPage.footer).toBeDisplayed();
        await expect(abtestPage.footer).toHaveTextContaining('Powered by');
        await expect(abtestPage.footer).toHaveTextContaining('Elemental Selenium')
    
    });
});
