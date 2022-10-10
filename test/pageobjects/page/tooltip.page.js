import { MainPage } from "./main.page";

class TooltipPage extends MainPage {
    button() {
        return $('#toolTipButton')
    };
    buttonTooltip() {
        return $('#buttonToolTip')
    };

    input() {
        return $('#toolTipTextField')
    };
    inputTooltip() {
        return $('#textFieldToolTip')
    };

    text() {
        return $('#texToolTopContainer').$('a=Contrary')
    };
    textTooltip() {
        return $('#contraryTexToolTip')
    };

    open() {
        super.open('tool-tips');
    };
};

export default new TooltipPage()