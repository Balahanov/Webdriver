let creds;

switch (browser.config.envName) {
    case "qa":
        //Data for QA env
        creds = {
            user1: {
                login: "tomsmith",
                password: "SuperSecretPassword!"
            },
            user2: {
                login: "admin",
                password: "admin"
            }
        }
        break;
    case "dev":
        //Data for DEV env
        creds = {
            user1: {
                login: "tomsmith",
                password: "SuperSecretPassword!"
            },
            user2: {
                login: "admin",
                password: "admin"
            }
        }
        break;
    default:
        console.error('There is no data for related enviroment!');
        break;
};

export default creds