describe('test for video player', () => {
    beforeEach(async () => {
        await browser.url('https://ru.webcamtests.com/')
    });

    it('Try to change default camera to the video from testdata', async () => {

        var constraints = { audio: true, video: true };
        await $('li*=Была обнаружена ').waitForDisplayed({ timeout: 4000 });
        await $("#webcam-launcher").click();
        
        await browser.pause(999999);
        Navigator.mediaDevices.getUserMedia({ audio: true, video: true })

        //await $('id="webcam-launcher"').click();
    });
});