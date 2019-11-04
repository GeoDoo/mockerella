const { Given, Then } = require('cucumber');

Given('I navigate to the homepage', async function () {
    await this.page.goto(this.host);
});

Then('I can see {string} in the title', async function (string) {
    const pageTitle = await this.page.title();

    if (!pageTitle.includes(string)) {
        throw new Error('Wrong title!');
    }
});
