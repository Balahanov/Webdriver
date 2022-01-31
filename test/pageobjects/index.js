//Contains imports for all 'pageobjects' folders. 
//Just add imports/exports for a new page/step/testdata 
//fiels to this file for easy import to a test

//Pages
import abtestPage from "./page/abtest.page";
import loginPage from "./page/login.page";
import mainPage from "./page/main.page";
import securePage from "./page/secure.page";

//Steps
import abtestStep from "./step/abtest.step";
import loginStep from "./step/login.step";
import mainStep from "./step/main.step";

//Test data
import creds from "./testdata/credentials";


export { 
    //Pages
    loginPage,
    securePage,
    abtestPage,
    mainPage,

    //Steps
    loginStep,
    abtestStep,
    mainStep,

    //Test data
    creds
}