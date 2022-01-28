import { securePage, loginPage } from '../pageobjects/page/index.js';
import { loginStep } from '../pageobjects/step/index.js';
import creds from '../testdata/credentials.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginStep.open();
        await expect(loginPage.title).toBeDisplayed()
        await expect(loginPage.title).toHaveTextContaining('Login Page');
        await loginStep.login(creds.user1.login, creds.user1.password);
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});