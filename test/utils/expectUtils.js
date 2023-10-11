const chaiExpect = require('chai').expect

class ExpectUtils {
    async compareTextWithExpected(actualText, ExpectedText){
        chaiExpect(actualText).to.equal(ExpectedText)
    }
}
module.exports = new ExpectUtils()