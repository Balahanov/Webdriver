import { loginPage } from "../page";
import Step from "./step";

class LoginStep extends Step {
    async login (username, password) {
        await loginPage.inputUsername.setValue(username);
        await loginPage.inputPassword.setValue(password);
        await loginPage.btnSubmit.click();
    };
    open() {
        return super.open('login');
    };
}

export default new LoginStep();