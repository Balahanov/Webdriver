//Config for QA env
const allure = require('allure-commandline')
import merge from 'deepmerge'
import wdioConf from '../../wdio.conf.js'

exports.config = merge(wdioConf.config, {

    baseUrl: 'https://demoqa.com/',
    envName: "qa",
    reporters: [['allure', {
        outputDir: './report/qa/allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        addConsoleLogs: true,
        disableMochaHooks: false
    }]],
}, { clone: false })
