import nestedFramePage from '../pageobjects/page/nestedFrame.page';

describe('Nested frame testing', () => {
    it('Check text in the parent and nested frame', async () => {
        const desc = "Sample Nested Iframe page. There are nested iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame and the nested child frame.";
        await nestedFramePage.open();
        await expect(nestedFramePage.description()).toHaveText(desc);
        /* Switch to first frame */
        await nestedFramePage.focusParentFrame();
        await expect(nestedFramePage.parentFrameText()).toHaveText('Parent frame');
        /* Swith to child frame */
        await nestedFramePage.focusChildFrame();
        await expect(nestedFramePage.childFrameText()).toHaveText('Child Iframe');
    });
});