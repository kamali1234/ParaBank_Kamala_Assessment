const axios = require('axios');
// const { accountNumber } = require('./accountOverview');

class APIInteractions {
   
    constructor() {
        // let response;
        this.baseURL = 'https://parabank.parasoft.com/parabank/services/bank';
    }
    async depositAmount(accountNumber, amount) {
        const depositapiUrl = `${this.baseURL}/deposit?accountId=${accountNumber}&amount=${amount}`;
        const response = await axios.post(depositapiUrl);
        return response;
    }
    async getTransaction(accountNumber){
        const getTransactionapiUrl = `${this.baseURL}/accounts/${accountNumber}/transactions`;
        let response = await axios.get(getTransactionapiUrl);
        return response;

    }
}
module.exports = new APIInteractions();