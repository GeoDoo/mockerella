module.exports = {
  record: function(interceptedRequest, requestsToMock) {
    if (interceptedRequest.resourceType() === 'fetch') {
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
