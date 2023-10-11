const testData = require('../testdata/inputFile')

class LoginPage {
    get registerLink() {
        return $("//a[text()='Register']")
    }
    get firstName() {
        return $("#customer\\.firstName")
    }
    get lastName() {
        return $("#customer\\.lastName")
    }
    get address() {
        return $("#customer\\.address\\.street")
    }
    get city() {
        return $("#customer\\.address\\.city")
    }
    get state() {
        return $("#customer\\.address\\.state")
    }
    get zipCode() {
        return $("#customer\\.address\\.zipCode")
    }
    get phoneNumber() {
        return $("#customer\\.phoneNumber")
    }
    get ssnNumber() {
        return $("#customer\\.ssn")
    }
    get userName() {
        return $("#customer\\.username")
    }
    get password() {
        return $("//input[@id='customer.password']")
    }
    get confirmPassword() {
        return $("#repeatedPassword")
    }
    get registerButton() {
        return $("//input[@value='Register']")
    }
    get btnLogin() {
        return $('.button');
    }

    async getTitle() {
        return await browser.getTitle();
    }
    async registerNewUser() {
        try {
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
        } catch (error) {
            console.log("Not able to register a user");
        }
    }
    async clickRegister() {
        try {
            await this.registerLink.click()
        } catch (error) {
            console.log("Not able to click on register")
        }
    }
}

module.exports = new LoginPage();
