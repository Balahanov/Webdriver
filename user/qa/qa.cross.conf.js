//Config for QA env CROSSBROWSER TESTING

import merge from 'deepmerge'
import wdioConf from './qa.conf'
const drivers = {
    firefox: { version: 'latest' }, // https://github.com/mozilla/geckodriver/releases
    chromiumedge: { version: 'latest' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
}

exports.config = merge(wdioConf.config, {
    services: [
        ['selenium-standalone', {
            logPath: 'logs',
            installArgs: { drivers }, // drivers to install
            args: { drivers } // drivers to use
        }]
    ],
    capabilities: [ {
        browserName: 'firefox'
    },   {
        browserName: 'MicrosoftEdge'
    }],
}, { clone: false })
