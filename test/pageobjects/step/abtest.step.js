import Step from "./step";

class AbtestStep extends Step {
    open() {
        return super.open('abtest');
    };
};

export default new AbtestStep()