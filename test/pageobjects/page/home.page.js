import Page from "./page";

class HomePage extends Page {

    getCard(title) {
        return $('.category-cards').$(`h5=${title}`);
    };
    getBanner() {
        return $('.home-banner');
    };

}

export default new HomePage()