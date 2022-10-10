import tooltipPage from '../pageobjects/page/tooltip.page';

describe('Tooltips after hoverin over testing', () => {
    beforeEach(() => {
        tooltipPage.open();
    });

    it('Check tooltip displayed after hovering over button', async () => {
        await tooltipPage.button().moveTo();
        await tooltipPage.buttonTooltip().isDisplayed();
        await expect(tooltipPage.buttonTooltip()).toHaveText('You hovered over the Button');
    });

    it('Check tooltip displayed after hovering over input', async () => {
        await tooltipPage.input().moveTo();
        await tooltipPage.inputTooltip().isDisplayed();
        await expect(tooltipPage.inputTooltip()).toHaveText('You hovered over the text field');
    });

    it('Check tooltip displayed after hovering over text', async () => {
        await tooltipPage.text().moveTo();
        await tooltipPage.textTooltip().isDisplayed();
        await expect(tooltipPage.textTooltip()).toHaveText('You hovered over the Contrary');
    });
});