module.exports = {
  app: {
    url: "http://localhost:3000"
  },
  logging: {
    isEnabled: true
  },
  puppeteer: {
    headless: true,
    args: ["--disable-web-security"] 
  }
};
