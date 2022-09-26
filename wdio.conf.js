exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        "goog:chromeOptions": {
            args: ["--use-fake-ui-for-media-stream",
                "--use-fake-device-for-media-stream",
                "--use-file-for-fake-video-capture=" + __dirname.replace(/\\/gi, '/') + '/test/pageobjects/testdata/test_stream.mjpeg']
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver', {
            installArgs: {
                version: "latest",
            },
            args: {
                version: "latest",
            }
        }],
        ['intercept']
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
       ui: 'bdd',
        timeout: 60000
    },
}
