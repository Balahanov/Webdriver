//Config for QA env
import merge from 'deepmerge'
import wdioConf from '../../wdio.conf.js'

exports.config = merge(wdioConf.config, {
    baseUrl: 'https://the-internet.herokuapp.com/',
    envName: "dev",
    reporters: [['allure', {
        outputDir: './report/dev/allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        addConsoleLogs: true,
        disableMochaHooks: false
    }]],
}, { clone: false })



