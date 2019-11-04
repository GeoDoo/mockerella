const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');

function CustomWorld() {
    this.host = 'https://www.google.com';
    this.driver = puppeteer;
}

setWorldConstructor(CustomWorld);
