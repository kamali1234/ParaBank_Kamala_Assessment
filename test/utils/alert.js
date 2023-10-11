class Alert{
    async acceptAlert() {
        if (await browser.isAlertOpen()) {
            // An alert is present, so accept it
            await browser.acceptAlert();
        }
      }
}  
module.exports = new Alert()