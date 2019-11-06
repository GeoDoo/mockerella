const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const puppeteer = require('puppeteer');

function CustomWorld() {
    this.host = 'https://www.google.com';
    this.driver = puppeteer;
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60 * 1000);
