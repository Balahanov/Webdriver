# Test framework info

Test portal link - <a href = "https://demoqa.com/"> Link <a>

Reporting - Allure

CI/CD - GitHub CI

# List of comands

`npm install` - after cloning repo

## Test developing command

`npx wdio run ./user/qa/qa.conf.js --spec abtest.js`    

where:
> `./user/qa/qa.conf.js` - path to config file
> `--spec abtest.js` - path to recuired test file

>After using this command, report is not generated

## QA/Dev environments

`npm run qa` - Run tests for provided environment (qa or dev). Default browser - Chrome
  
`npm run qa-cross` - Run tests with Firefox, Chrome, Edge, Safari browsers

`mpm run generate-qa-report` - Generate last qa or dev report
  
>All tests are runned parallel
  
>Report generated automatically after test run finished
 
