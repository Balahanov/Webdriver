export default class Page {

    iconHeader() {
        return $('header').$('img');
    };
    linkHeader() {
        return $('header').$('a');
    };

    checkHeaderElementsDisplayed() {
        return this.iconHeader().isDisplayed(),
            this.linkHeader().isClickable();
    }
    open(path) {
        return browser.url(`${path}`)
    }

}
