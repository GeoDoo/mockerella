const config = require("../../config");

module.exports = {
  record: function(interceptedRequest, requestsToMock) {
    if (!interceptedRequest.url().includes(config.app.url)) {
      requestsToMock.push(interceptedRequest);
    }
  },
  print: function(requestsToMock) {
    console.log("\n");
    requestsToMock.forEach(function(req) {
      console.log(req.method(), req.url());
    });
    console.log("");
  }
};
