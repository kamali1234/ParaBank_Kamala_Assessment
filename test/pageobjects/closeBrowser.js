class CloseBrowser {
    async closeBrowser(){
        return $("//input[@name='payee.name']")
    }
}
module.exports = new CloseBrowser();