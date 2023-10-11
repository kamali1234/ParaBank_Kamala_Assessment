const testData = require('../testdata/inputFile')

class Dashboard {
    get accountOverviewLink(){
        return $("//a[text()='Accounts Overview']")
    }
    get fundTransferLink(){
        return $("//a[text()='Transfer Funds']")
    }
    get payBillLink(){
        return $("//a[text()='Bill Pay']")
    }
    get logoutLink(){
        return $("//a[text()='Log Out']")
    }
    get accountTable(){
        return $("//table[@id='accountTable']//a")
    }
    async clickaccountOverviewLink(){
        await this.accountOverviewLink.click()
    }
    async clickpayBillLink(){
        await this.payBillLink.click()
    }
    async clickFundTransferLink(){
        await this.fundTransferLink.click()
    }
    async clickLogoutLink(){
        await this.logoutLink.click()
    }
}
module.exports = new Dashboard();