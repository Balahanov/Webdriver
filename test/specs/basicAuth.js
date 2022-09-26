import { mainStep, basicAuthStep, creds } from "../pageobjects"

describe('Chech Basic Auth on the page', () => {
    beforeEach(() => {
        mainStep.open('')
    })

    it('Check valid auth', async () => {
        await mainStep.clickLink('Basic Auth');
        await basicAuthStep.login(creds.user2.login, creds.user2.password)
        await expect(basicAuthStep.getTitle()).toHaveTextContaining('Basic Auth');
        await expect(basicAuthStep.getCongratsMessage()).toHaveTextContaining('Congratulations! You must have the proper credentials.');
    })
})