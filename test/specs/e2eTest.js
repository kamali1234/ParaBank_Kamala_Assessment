const LoginPage = require('../pageobjects/loginPage');
const Mainpage = require('../pageobjects/mainPage');
const dashboard = require('../pageobjects/dashboardPage');
const accountOverview = require('../pageobjects/accountOverview');
const fundTransfer = require('../pageobjects/fundTransferPage');
const apiInteractions = require('../pageobjects/APIInteractions');
const waitUtils = require('../utils/waitUtils');
const alert = require('../utils/alert');
const expectUtils = require('../utils/expectUtils');
const testData = require('../testdata/inputFile');

describe('test', () => {
    it('test 1', async () => {
        // Open the URL https://parabank.parasoft.com/
        await Mainpage.open()
        // Wait for page title (ParaBank | Welcome | Online Banking) to be visible. 
        await waitUtils.waitForPageTitle(testData.expectedTitle);
        // Get the page title (ParaBank | Welcome | Online Banking) and validate it
        const pageTitle = await LoginPage.getTitle();
        await expectUtils.compareTextWithExpected(pageTitle, testData.expectedTitle);
        // Accept the Cookie message (if any)
        await alert.acceptAlert();
        // Click on Register
        await LoginPage.clickRegister();
        // Enter all the details and register as a new user
        await LoginPage.registerNewUser();
        // - Navigate to the account overview and fetch the Account number
        await browser.pause(2000)
        await dashboard.clickaccountOverviewLink();
        const accountNumber = await accountOverview.getAccountNumber()
        // Deposit the amount using the POST request using API 
        const response = await apiInteractions.depositAmount(accountNumber, testData.amount);
        // Verify the response code and the message "Successfully deposited ${Amount} to account #{Account_Num}
        const responseCode = await response.status;
        await expectUtils.compareTextWithExpected(responseCode, testData.expectedCode)
        const responseMessage = await response.data;
        await expectUtils.compareTextWithExpected(responseMessage, testData.expectedMessage(testData.amount, accountNumber))
        // Verify if the deposited amount is displayed in the account
        await accountOverview.clickOnAccountNum()
        await accountOverview.checkDepositAmount();
        // Perform a transfer from the account and verify if the transfer is successful.
        await fundTransfer.fundTransferAndVerify(accountNumber)
        // Using the account Number stored in the above step, perform a GET request on the API 
        const getTransactionResponse = await apiInteractions.getTransaction(accountNumber);
        // Store all the descriptions, transaction date and amount values from the API for the associated account
        const data = getTransactionResponse.data;
        // Navigate to the account overview and click on the {Account_Num}
        await dashboard.clickaccountOverviewLink();
        await accountOverview.clickOnAccountNum()
        // Validate the values of the descriptions, transaction date and amount stored from the above API with the front end 
        await accountOverview.validateValues(data);
        //  Log Off from the application
        await dashboard.clickLogoutLink()
        // Close the browser
        await browser.closeWindow();        

    })
})