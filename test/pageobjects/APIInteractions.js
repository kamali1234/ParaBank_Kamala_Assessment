const axios = require('axios');
// const { accountNumber } = require('./accountOverview');

class APIInteractions {
   
    constructor() {
        // let response;
        this.baseURL = 'https://parabank.parasoft.com/parabank/services/bank';
    }
    async depositAmount(accountNumber, amount) {
        try {
            const depositapiUrl = `${this.baseURL}/deposit?accountId=${accountNumber}&amount=${amount}`;
            const response = await axios.post(depositapiUrl);
            return response;
        } catch (error) {
            console.log("Not able to deposit amount using API")
        }
    }
    async getTransaction(accountNumber){
        try {
            const getTransactionapiUrl = `${this.baseURL}/accounts/${accountNumber}/transactions`;
            let response = await axios.get(getTransactionapiUrl);
            return response;
        } catch (error) {
            console.log("Not able to get transaction using API")
        }

    }
}
module.exports = new APIInteractions();