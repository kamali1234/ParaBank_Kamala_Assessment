const testData = require('../testdata/inputFile')

class BillPay {
    get payeeName(){
        return $("//input[@name='payee.name']")
    }
    get payeeAddress(){
        return $("//input[@name='payee.address.street']")
    }
    get payeeCity(){
        return $("//input[@name='payee.address.city']")
    }
    get payeeState(){
        return $("//input[@name='payee.address.state']")
    }
    get payeeZipcode(){
        return $("//input[@name='payee.address.zipCode']")
    }
    get payeePhoneNumber(){
        return $("//input[@name='payee.phoneNumber']")
    }
    get payeeAccountNumber(){
        return $("//input[@name='payee.accountNumber]")
    }
    get payeeVerifyAccountNumber(){
        return $("//input[@name='verifyAccount']")
    }
    get payeeAmount(){
        return $("//input[@name='amount']")
    }

    async payBill(){
        await this.payeeName.setValue(testData.payeeName)
        await this.payeeAddress.setValue(testData.payeeAddress)
        await this.payeeCity.setValue(testData.payeeCity)
        await this.payeeState.setValue(testData.payeeState)
        await this.payeeZipcode.setValue(testData.payeeZipcode)
        await this.payeePhoneNumber.setValue(testData.payeePhoneNumber)
        await this.payeeAccountNumber.setValue(testData.payeeAccountNumber)
        await this.payeeVerifyAccountNumber.setValue(testData.payeeAccountNumber)
        await this.payeeAmount.setValue(testData.payeeAmount)
    }
}
module.exports = new BillPay()