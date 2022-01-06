import Page from "./page";

class AbtestPage extends Page {

    get title() {
        return $('#content').$('h3')
    }

    get pageText() {
        return $('#content').$('p')
    }
};

export default new AbtestPage()