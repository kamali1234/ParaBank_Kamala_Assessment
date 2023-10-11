const testData = require('../testdata/inputFile');
const chaiExpect = require('chai').expect;
const APIInteractions = require('./APIInteractions');
const formatDate = require('../utils/formatDate');
const expectUtils = require('../utils/expectUtils');

class AccountOverview {
    get accountNumberElement() {
        return $("//table[@id='accountTable']//a");
    }
    get depositedAmountEle() {
        return $("//table[@id='transactionTable']//tr[1]/td[4]");
    }
    get allRowsIntransactionTable() {
        return $("//table[@id='transactionTable']/tbody/tr[0]/td[0]");
    }

    async getAccountNumber() {
        try {
            const accountNumber = await this.accountNumberElement.getText();
            return accountNumber;
        } catch (error) {
            console.error(`An error occurred: ${error.message}`);
        }

    }
    async clickOnAccountNum() {
        try {
            await this.accountNumberElement.click();
        } catch (error) {
            console.log("Not able to client on account number")
        }
    }
    async checkDepositAmount() {
        try {
            const depositedAmount = await this.depositedAmountEle.getText();
            chaiExpect(depositedAmount).to.include(testData.amount);
        } catch (error) {
            console.log("Deposited amount is incorrect")
        }
    }
    async validateValues(data) {
        let responseAmount;
        let amountValueActual;
        let responseDate;
        let responseDesc;
        for (let i = 0; i < data.length - 1; i++) {
            // Verifying Amount
            responseAmount = await data[i].amount;
            let amountDebitEle = await $("//table[@id='transactionTable']/tbody/tr[" + (i + 1) + "]/td[3]");
            let amountCreditEle = await $("//table[@id='transactionTable']/tbody/tr[" + (i + 1) + "]/td[4]");
            let amountDebitValue = await amountDebitEle.getText();
            let amountCreditValue = await amountCreditEle.getText();
            if (await amountDebitValue !== '') {
                amountValueActual = amountDebitValue;
            }
            else {
                amountValueActual = amountCreditValue;
            }
            let responseAmountModified = '$' + responseAmount + '.00';
            await expectUtils.compareTextWithExpected(amountValueActual, responseAmountModified);
            // Verifying Date
            responseDate = await data[i].date;
            let responseDateFormatted = await formatDate.formatDateFunc(responseDate);
            let dateEle = await $("//table[@id='transactionTable']/tbody/tr[" + (i + 1) + "]/td[1]");
            let dateValueActual = await dateEle.getText();
            await expectUtils.compareTextWithExpected(dateValueActual, responseDateFormatted);
            // Verifying description
            responseDesc = await data[i].description;
            let descEle = await $("//table[@id='transactionTable']/tbody/tr[" + (i + 1) + "]/td[2]");
            let descValueActual = await descEle.getText();
            await expectUtils.compareTextWithExpected(descValueActual, responseDesc);
        }
    }
}
module.exports = new AccountOverview();