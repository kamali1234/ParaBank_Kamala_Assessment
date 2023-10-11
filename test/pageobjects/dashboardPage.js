const testData = require('../testdata/inputFile')

class Dashboard {
    get accountOverviewLink() {
        return $("//a[text()='Accounts Overview']")
    }
    get fundTransferLink() {
        return $("//a[text()='Transfer Funds']")
    }
    get payBillLink() {
        return $("//a[text()='Bill Pay']")
    }
    get logoutLink() {
        return $("//a[text()='Log Out']")
    }
    get accountTable() {
        return $("//table[@id='accountTable']//a")
    }
    async clickaccountOverviewLink() {
        try {
            await this.accountOverviewLink.click()
        } catch (error) {
            // console.log("Not able to click on account over view link" + error)
        }
    }
    async clickpayBillLink() {
        try {
            await this.payBillLink.click()
        } catch (error) {
            console.log("Not able to client on pay bill link")
        }
    }
    async clickFundTransferLink() {
        try {
            await this.fundTransferLink.click()
        } catch (error) {
            console.log("Not able to click on fund transfer link")
        }
    }
    async clickLogoutLink() {
        try {
            await this.logoutLink.click()

        } catch (error) {
            console.log("Not able to click on logout link")
        }
    }
}
module.exports = new Dashboard();