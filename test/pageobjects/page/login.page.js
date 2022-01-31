import Page from './page';

class LoginPage extends Page {
    get inputUsername() {
        return $('#username');
    }

    get title() {
        return $('#content').$('h2')
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }
  
}

export default new LoginPage();
