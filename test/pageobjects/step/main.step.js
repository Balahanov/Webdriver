import Step from "./step";

class MainStep extends Step {

    open() {
        return super.open('');
    };
}

export default new MainStep();