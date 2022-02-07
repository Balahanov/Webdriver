import Step from "./step";

class MainStep extends Step {
    clickLink(linkName) {
        return $(`=${linkName}`).click()
    }
    open() {
        return super.open('');
    };
}

export default new MainStep();