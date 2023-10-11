class WaitUtils {
    async waitForPageTitle(expectedTitle) {
        await browser.waitUntil(async () => {
            const pageTitle = await browser.getTitle();
            return pageTitle === expectedTitle;
        }, 5000);
    }
    async WaitUntilElementDisplayed(element) {
        await browser.waitUntil(async () => element.waitForDisplayed(), { timeout: 3000, interval: 500 })
    }
}
module.exports = new WaitUtils();