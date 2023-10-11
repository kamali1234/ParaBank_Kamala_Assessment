const testData = require('../testdata/inputFile');
const dashboard = require('./dashboardPage');
const chaiExpect = require('chai').expect
const waitUtils = require('../utils/waitUtils')


class FundTransfer {
    get amountField() {
        return $("#amount")
    }
    get transferButton() {
        return $("//input[@value='Transfer']")
    }

    get transferSuccessMessage() {
        return $("//h1[text()='Transfer Complete!']");
    }
    async enterAmount(accountNumber) {
        try {
            let element = await $("//select[@id='fromAccountId']/option[text()='" + accountNumber + "']")
            await waitUtils.WaitUntilElementDisplayed(element)
            await this.amountField.setValue(testData.fundTransferAmount)
        } catch (error) {
            console.log("Not able to enter amount")
        }
    }
    async clickTransferButton() {
        try {
            await this.transferButton.click()
        } catch (error) {
            console.log("Not able to click on transfer button")
        }
    }
    async verifyTransferSuccessMessage() {
        try {
            await waitUtils.WaitUntilElementDisplayed(this.transferSuccessMessage)
            const successMessage = await this.transferSuccessMessage.getText()
            chaiExpect(successMessage).to.equal(testData.expectedtranferSuccessMessage)
        } catch (error) {
            console.log("Not able to verify transaction success message")
        }
    }
    async fundTransferAndVerify(accountNumber) {
        try {
            await dashboard.clickFundTransferLink();
            await this.enterAmount(accountNumber);
            await this.clickTransferButton();
            await this.verifyTransferSuccessMessage();
        } catch (error) {
            console.log("Not able transfer fund")
        }
    }

}
module.exports = new FundTransfer();