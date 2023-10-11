// const { $ } = require('@wdio/globals')
const Page = require('./mainPage');
const testData = require('../testdata/inputFile')


class LoginPage extends Page {
    get registerLink() {
        return $("//a[text()='Register']")
    }
    get firstName(){
        return $("#customer\\.firstName")
    }
    get lastName(){
        return $("#customer\\.lastName")
    }
    get address(){
        return $("#customer\\.address\\.street")
    }
    get city(){
        return $("#customer\\.address\\.city")
    }
    get state(){
        return $("#customer\\.address\\.state")
    }
    get zipCode(){
        return $("#customer\\.address\\.zipCode")
    }
    get phoneNumber(){
        return $("#customer\\.phoneNumber")
    }
    get ssnNumber(){
        return $("#customer\\.ssn")
    }
    get userName(){
        return $("#customer\\.username")
    }
    get password(){
        return $("//input[@id='customer.password']")
    }
    get confirmPassword(){
        return $("#repeatedPassword")
    }
    get registerButton(){
        return $("//input[@value='Register']")
    }





    async registerNewUser(){
        await this.firstName.setValue(testData.firstName)
        await this.lastName.setValue(testData.lastName)
        await this.address.setValue(testData.address);
        await this.city.setValue(testData.city);
        await this.state.setValue(testData.state);
        await this.zipCode.setValue(testData.zipCode);
        await this.phoneNumber.setValue(testData.phoneNumber);
        await this.ssnNumber.setValue(testData.ssnNumber);
        await this.userName.setValue(testData.userName);
        await this.password.setValue(testData.password);
        await this.confirmPassword.setValue(testData.password);
        await this.registerButton.click()
    }



    // get username () {
    //     return $("//input[@name='username']");
    // }

    // get password () {
    //     return $("//input[@name='password']");
    // }

    get btnLogin () {
        return $('.button');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open () {
        return super.open();
    }
    async clickRegister(){
        await this.registerLink.click()
    }
}

module.exports = new LoginPage();
