import alerts from '../pageobjects/page/alerts.page';

describe('Allerts testing', () => {
    beforeEach(() => {
        alerts.open();
    });

    it('Check alert appears in 5 seconds after clicking the button', async () => {
        await alerts.timeAllertButton().click();
        await browser.pause(5150);
        const alert = await browser.getAlertText();
        expect(alert).toEqual('This alert appeared after 5 seconds');
    });

    it('Check confirmation allert', async () => {
        await alerts.confirmButton().click();
        await browser.acceptAlert();
        await expect(alerts.confipmResult()).toHaveText('You selected Ok');
        await alerts.confirmButton().click();
        await browser.dismissAlert();
        await expect(alerts.confipmResult()).toHaveText('You selected Cancel');
    });

    it('Check inputed message displayed in the form', async () => {
        const text = 'test qa auto'
        await alerts.promptButton().click();
        await browser.sendAlertText(text);
        await expect(alerts.promptResult()).toHaveText(`You entered ${text}`);
    });
});