import Page from "./page";

class MainPage extends Page {

    get title() {
        return $('[class="heading"]');
    }
    get abtestLink() {
        return $('=A/B Testing');
    }
    get addRemove() {
        return $('=Add/Remove Elements');
    }
    get basicAuth() {
        return $('=Basic Auth');
    }
    get brokenImages() {
        return $('=Broken Images');
    }
    get challengingDOM() {
        return $('=Challenging DOM');
    }
    get checkboxes() {
        return $('=Checkboxes');
    }
    get contextMenu() {
        return $('=Context Menu');
    }
    get digestAuthentication() {
        return $('=Digest Authentication');
    }
    get disappearingElements() {
        return $('=Disappearing Elements');
    }
    get dragAndDrop() {
        return $('=Drag and Drop');
    }
    get dropdown() {
        return $('=Dropdown');
    }
    get dynamicContent() {
        return $('=Dynamic Content');
    }
    get dynamicControls() {
        return $('=Dynamic Controls');
    }
    get dynamicLoading() {
        return $('=Dynamic Loading');
    }
    get entryAd() {
        return $('=Entry Ad');
    }
    get exitIntent() {
        return $('=Exit Intent');
    }
    get fileDownload() {
        return $('=File Download');
    }
    get fileUpload() {
        return $('=File Upload');
    }
    get floatingMenu() {
        return $('=Floating Menu');
    }
    get forgotPassword() {
        return $('=Forgot Password');
    }
    get formAuthentication() {
        return $('=Form Authentication');
    }
    get frames() {
        return $('=Frames');
    }
    get geolocation() {
        return $('=Geolocation');
    }
    get horizontalSlider() {
        return $('=Horizontal Slider');
    }
    get infiniteScroll() {
        return $('=Infinite Scroll');
    }
    get inputs() {
        return $('=Inputs');
    }
    get jQueryUIMenus() {
        return $('=JQuery UI Menus');
    }
    get javaScriptAlerts() {
        return $('=JavaScript Alerts');
    }
    get javaScriptOnloadEventError() {
        return $('=JavaScript onload event error');
    }
    get keyPresses() {
        return $('=Key Presses');
    }
    get largeDeepDOM() {
        return $('=Large & Deep DOM');
    }
    get multipleWindows() {
        return $('=Multiple Windows');
    }
    get nestedFrames() {
        return $('=Nested Frames');
    }
    get notificationMessages() {
        return $('=Notification Messages');
    }
    get redirectLink() {
        return $('=Redirect Link');
    }
    get secureFileDownload() {
        return $('=Secure File Download');
    }
    get shadowDOM() {
        return $('=Shadow DOM');
    }
    get shiftingContent() {
        return $('=Shifting Content');
    }
    get slowResources() {
        return $('=Slow Resources');
    }
    get sortableDataTables() {
        return $('=Sortable Data Tables');
    }
    get statusCodes() {
        return $('=Status Codes');
    }
    get typos() {
        return $('=Typos');
    }
    get wysiwygEditor() {
        return $('=WYSIWYG Editor');
    }
}

export default new MainPage()