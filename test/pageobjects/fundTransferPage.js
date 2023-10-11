const testData = require('../testdata/inputFile');
const accountOverview = require('./accountOverview');
const chaiExpect = require('chai').expect


class FundTransfer {
    get amountField(){
        return $("#amount")
    }
    get transferButton(){
        return $("//input[@value='Transfer']")
    }
    get transferSuccessMessage(){
        return $("//h1");
    }
    get waitEleInFundTransfer(){
        // return $(`//select[@id='fromAccountId']/option[text()='${accountOverview.accountNumber}']`)
                return $("//select[@id='fromAccountId']/option[text()='21588']")

    }
    async enterAmount(){
        await this.amountField.setValue(testData.fundTransferAmount)
    }
    async clickTransferButton(){
        await this.transferButton.click()
    }
    async verifyTransferSuccessMessage(){
        const successMessage = await this.transferSuccessMessage.getText()
        chaiExpect(successMessage).to.equal(testData.expectedtranferSuccessMessage)
    }

}
module.exports = new FundTransfer();