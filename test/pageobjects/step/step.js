export default class Step {
    
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}