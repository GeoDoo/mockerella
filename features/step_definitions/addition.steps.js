const { When, Then } = require('cucumber');
const { add } = require('../../index.js');

When('I add {int} and {int}', function (int, int2) {
    this.result = add(int, int2);
});

Then('I get back {int}', function (int) {
    if (this.result !== int)
        throw new Error('Wrong result!');
});