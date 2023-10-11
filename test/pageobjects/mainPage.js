const testData = require('../testdata/inputFile');

class Mainpage {
    async open () {
        await browser.url(testData.browserUrl)
    }
}
module.exports = new Mainpage();
