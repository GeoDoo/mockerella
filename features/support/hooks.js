const { Before, After } = require('cucumber');
const config = require('../../config');
const interceptor = require('./interceptor');
const logger = require('./logger')

Before(async function () {
    this.host = config.app.url;
    this.requestsToMock = [];
    this.browser = await this.driver.launch(config.puppeteer);
    this.page = await this.browser.newPage();
    interceptor.startOn(this.page, this.requestsToMock, logger);
});

After(async function () {
    if (this.browser && this.page) {
        const cookies = await this.page.cookies();

        if (cookies && cookies.length > 0) {
            await this.page.deleteCookie(...cookies);
        }

        if (config.logging.isEnabled) {
            logger.print(this.requestsToMock);
        }

        await this.page.close();
        this.page = null;

        this.requestsToMock = [];

        await this.browser.close();
        this.browser = null;
    }
});
