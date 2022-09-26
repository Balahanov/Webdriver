import { mainStep, statusCodeStep } from "../pageobjects/index"


describe('Check all statuscodes requests', () => {
    /* beforeEach(() => {
        
        //mainStep.clickLink('Status Codes');
    }); */

    it('Test for 200 status code', async () => {
        await mainStep.open('');
        await mainStep.clickLink('Status Codes');
        await expect(statusCodeStep.getTitle()).toHaveText('Status Codes');
        await expect(statusCodeStep.getDescription())
            .toHaveTextContaining('HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made (e.g. Success, Redirection, Client Error, Server Error). For a complete list of status codes, go here.');
        browser.setupInterceptor();
        browser.expectRequest('GET', browser.config.baseUrl + 'status_codes/200', 200);
        await expect(statusCodeStep.clickLink200()).toHaveTextContaining('This page returned a 200 status code.');
        await browser.pause(1000);
        let x = browser.getRequest(0)
        console.log('===============================================================================')

        console.log(x)

        await browser.assertRequests();

    });

    it.only('111', async () => {
        await browser.url('https://cdsqa.candid.org/')
        await browser.setupInterceptor();
        await browser.expectRequest('GET', 'https://cdsqa.candid.org/api/lookups/ineligible_codes', 200);

        await $('#username').setValue('maksim.balakhanau')
        await $('#password').setValue('Qwerty123!')
        await $('button*=Sign in').click()

        await browser.pause(10000);
        await browser.assertExpectedRequestsOnly();
    })

    /* it('Test for 301 status code', () => {

    });

    it('Test for 404 status code', () => {

    });

    it('Test for 500 status code', () => {

    }); */
})