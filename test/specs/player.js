describe('test for video player', () => {
    beforeEach(async () => {
        await browser.url('https://ru.webcamtests.com/')
    });

    it('Try to change default camera to the video from testdata', async () => {
        const player = $('#webcam-stream');
        const webcameraDetectedMessage = $('li*=Была обнаружена ');
        const startTranslationButton = $("#webcam-launcher");
        const successMessage = $('li*=Тестирование завершено успешно');
        
        await webcameraDetectedMessage.waitForDisplayed({ timeout: 4000 });
        await startTranslationButton.click();
        await expect(player).toHaveAttribute('autoplay');
        await successMessage.waitForDisplayed({ timeout: 20000 });
    });
});