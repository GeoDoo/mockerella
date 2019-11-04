const { Before, After } = require('cucumber');

Before(async function () {
    this.browser = await this.driver.launch({ headless: true });
    this.page = await this.browser.newPage();
});

After(async function () {
    if (this.browser && this.page) {
        const cookies = await this.page.cookies();
        if (cookies && cookies.length > 0) {
            await this.page.deleteCookie(...cookies);
        }
        await this.page.close();
        this.page = null;
        await this.browser.close();
    }
});
