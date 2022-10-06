import { MainPage } from "./main.page";

class AlertPage extends MainPage {
    confirmButton() {
        return $('#confirmButton')
    };
    confipmResult(){
        return $('#confirmResult')
    };
    promptButton(){
        return $('#promtButton')
    };
    promptResult(){
        return $('.text-success')
    };
    timeAllertButton(){
        return $('#timerAlertButton')
    };

    open() {
        super.open('alerts');
    };
};

export default new AlertPage()