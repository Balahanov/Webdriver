import { MainPage } from "./main.page";

class NestedFrame extends MainPage {
    description() {
        return $('#framesWrapper').$$('div')[0]
    };
    async focusParentFrame() {
        return await browser.switchToFrame(await $('[id="frame1"]'))
    };
    async parentFrameText() {
        return await $('body')
    };
    async focusChildFrame() {
        return await browser.switchToFrame(await $('iframe'))
    };
    async childFrameText() {
        return await $('body').$$('p')
    };

    open() {
        super.open('nestedframes');
    };
};

export default new NestedFrame()