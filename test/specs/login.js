import { loginStep, creds } from '../pageobjects/index.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginStep.open();
        await expect(loginStep.getTitle()).toBeDisplayed();
        await expect(loginStep.getTitle()).toHaveTextContaining('Login Page');
        await expect(loginStep.login(creds.user1.login, creds.user1.password)).toHaveTextContaining(
            'You logged into a secure area!');
    });
});
