const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const puppeteer = require('puppeteer');

function CustomWorld() {
    this.driver = puppeteer;
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(120 * 1000);
