class testData{
    browserUrl = "https://parabank.parasoft.com/";
    expectedTitle = 'ParaBank | Welcome | Online Banking'
    firstName = 'TestFirstName'
    lastName = 'TestLastName'
    address = 'No. 12, Iyyappanthangal'
    city = 'Chennai'
    state = 'TamilNadu'
    zipCode = '600122'
    phoneNumber = '8875534456'
    ssnNumber = '3456'
    userName = 'Tests'+Math.floor(Math.random() * 90) + 10;
    password = 'test123'
    amount = '5000';
    expectedCode = 200;
    expectedMessage = (amount, accountNumber) => `Successfully deposited $${amount} to account #${accountNumber}`;
    expectedtranferSuccessMessage = 'Transfer Complete!'
    fundTransferAmount = '2000'
    payeeName = 'Ramkumar'
    PayeeAddress = 'No. 10, Porur'
    payeeCity = 'Chennai'
    payeeState = 'TamilNadu'
    payeeZipcode = '600897'
    payeePhoneNumber = '8870023345'
    payeeAccountNumber = '12345'
    payeeAmount= '3000'
}
module.exports = new testData();