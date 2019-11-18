module.exports = {
  startOn: async function(page, requestsToMock, logger) {
    await page.setRequestInterception(true);
    page.on("request", interceptedRequest => {
      if (
        interceptedRequest.url().endsWith(".png") ||
        interceptedRequest.url().endsWith(".jpg")
      ) {
        interceptedRequest.abort();
        return;
      }

      interceptedRequest.continue();
      logger.record(interceptedRequest, requestsToMock);
    });
  }
};
