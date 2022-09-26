import Step from "./step";
import homePage from "../page/home.page";

class HomeStep extends Step {
    clickCard(title) {
        homePage.card(title).scrollIntoView();
        return homePage.card(title).click();
    };

    checkBannerDisplayed() {
        homePage.banner().isDisplayed();
    };

    open() {
        return super.open('');
    };
}

export default new HomeStep();