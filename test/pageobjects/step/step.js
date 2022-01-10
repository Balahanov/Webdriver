export default class Step {
    
    open(path) {
        return browser.url(`${path}`)
    }
}