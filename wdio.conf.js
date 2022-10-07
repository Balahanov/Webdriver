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
    }],
    logLevel: 'warn',
    bail: 1, 
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
    beforeSession(config, caps, specs) {
        specs.forEach(element => {
            /* Triggered if 'player.js' spec included into test run for web camera simulation */
            if (element.includes('player.js')) {
                return caps['goog:chromeOptions'] = {
                    args: [
                        '--use-fake-ui-for-media-stream',
                        '--use-fake-device-for-media-stream',
                        '--use-file-for-fake-video-capture=D:/Reps/Webdriver/Webdriver/test/pageobjects/testdata/test_stream.mjpeg'
                    ]
                }
            };
        });

    }
}
