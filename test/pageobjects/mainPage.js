module.exports = class Page {
    open () {
        return browser.url('https://parabank.parasoft.com/')
    }
}
