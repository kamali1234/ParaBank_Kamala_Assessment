const testData = require('../testdata/inputFile')
const chaiExpect = require('chai').expect
const APIInteractions = require('./APIInteractions')
const formatDate = require('../utils/formatDate')



class AccountOverview {
    get accountNumberElement(){
        return $("//table[@id='accountTable']//a")
    }
    get depositedAmountEle(){
        return $("//table[@id='transactionTable']//tr[1]/td[4]")
    }
    get allRowsIntransactionTable(){
        return $("//table[@id='transactionTable']/tbody/tr[0]/td[0]")
    }
   

    async getAccountNumber(){
        const accountNumber = await this.accountNumberElement.getText();
        return accountNumber;
    }
    async clickOnAccountNum(){
        await this.accountNumberElement.click();
    }
    async checkDepositAmount(){
        const depositedAmount =await this.depositedAmountEle.getText()
        chaiExpect(depositedAmount).to.include(testData.amount)
    }
    async validateValues(data){
        let responseAmount;
        let amountValueActual;
        let responseDate
        let responseDesc
        for (let i=0; i<data.length-1; i++){
            // Verifying Amount
            responseAmount = await data[i].amount
            let amountDebitEle =await $("//table[@id='transactionTable']/tbody/tr["+(i+1)+"]/td[3]")
            let amountCreditEle =await $("//table[@id='transactionTable']/tbody/tr["+(i+1)+"]/td[4]")
            let amountDebitValue = await amountDebitEle.getText()
            let amountCreditValue = await amountCreditEle.getText()
            if (await amountDebitValue !== ''){
                amountValueActual = amountDebitValue
            }
            else{
                amountValueActual = amountCreditValue
            }
            let responseAmountModified = '$' + responseAmount + '.00';
            chaiExpect(amountValueActual).to.equal(responseAmountModified)
            // Verifying Date
            responseDate = await data[i].date
            let responseDateFormatted = await formatDate.formatDateFunc(responseDate)
            let dateEle = await $("//table[@id='transactionTable']/tbody/tr["+(i+1)+"]/td[1]")
            let dateValueActual = await dateEle.getText()
            chaiExpect(dateValueActual).to.equal(responseDateFormatted)
             // Verifying description
             responseDesc = await data[i].description
             let descEle = await $("//table[@id='transactionTable']/tbody/tr["+(i+1)+"]/td[2]")
             let descValueActual = await descEle.getText()
             chaiExpect(descValueActual).to.equal(responseDesc)
        }

       
        
    }
}
module.exports = new AccountOverview();