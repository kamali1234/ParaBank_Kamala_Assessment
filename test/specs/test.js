const LoginPage = require('../pageobjects/loginPage')
const dashboard = require('../pageobjects/dashboardPage')
const accountOverview = require('../pageobjects/accountOverview')
const billPay = require('../pageobjects/billPayPage')
const fundTransfer = require('../pageobjects/fundTransferPage')
const apiInteractions = require('../pageobjects/APIInteractions')
const waitUtils = require('../utils/waitUtils')
const formatDate = require('../utils/formatDate')
const alert = require('../utils/alert')
const expectUtils = require('../utils/expectUtils')
const testData = require('../testdata/inputFile')
const chaiExpect = require('chai').expect
const axios = require('axios');
// const 

describe ('test', () => {
    it ('test 1', async () => {
        await LoginPage.open()
        const pageTitle = await browser.getTitle();
        console.log(pageTitle + "title")
        await waitUtils.waitForPageTitle(testData.expectedTitle);
        await expectUtils.compareTextWithExpected(pageTitle, testData.expectedTitle);
        await LoginPage.clickRegister();
        await LoginPage.registerNewUser();
        await alert.acceptAlert()
        //   }         // await $("//input[@name='username']").setValue(testData.userName)
        // // await $("//input[@name='password']").setValue(testData.password)
        // // await $("//input[@value='Log In']").click();
        await dashboard.clickaccountOverviewLink();
        const accountNumber = await accountOverview.getAccountNumber()
        const response = await apiInteractions.depositAmount(accountNumber, testData.amount);
        const responseCode = await response.status;
        const responseMessage = await response.data;
        chaiExpect(responseMessage).to.equal(testData.expectedMessage(testData.amount, accountNumber))
        chaiExpect(responseCode).to.equal(testData.expectedCode)
        await accountOverview.clickOnAccountNum()
        await accountOverview.checkDepositAmount();
        await dashboard.clickFundTransferLink();
        let element =await $("//select[@id='fromAccountId']/option[text()='"+accountNumber+"']")
        await waitUtils.WaitUntilElementDisplayed(element)
        await fundTransfer.enterAmount();
        await fundTransfer.clickTransferButton();
        let element2 =await $("//h1[text()='Transfer Complete!']")
        await waitUtils.WaitUntilElementDisplayed(element2)

        // Dont remove pause
        // await browser.pause(2000)

        await fundTransfer.verifyTransferSuccessMessage();
        const getTransactionResponse = await apiInteractions.getTransaction(accountNumber);
        const data = getTransactionResponse.data;
        await dashboard.clickaccountOverviewLink();
        await accountOverview.clickOnAccountNum()
                await accountOverview.validateValues(data);
                await dashboard.clickLogoutLink()

        // await billPay.payBill();
        
        
  
    })
})