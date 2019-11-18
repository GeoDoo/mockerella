const posts = [
  {
    title: { rendered: "How to properly test a React component: an example" }
  },
  {
    title: { rendered: "Refactoring a generator" }
  },
  {
    title: { rendered: "Defensive coding" }
  },
  {
    title: { rendered: "GeodooBlog: new start!" }
  },
  {
    title: { rendered: "Mid-year resolutions check" }
  },
  {
    title: { rendered: "Introduction to Reactive programming: part 2" }
  },
  {
    title: { rendered: "JS exponential operator" }
  },
  {
    title: { rendered: "Introduction to Reactive programming: part 1" }
  },
  {
    title: { rendered: "Memoization: a use case" }
  },
  {
    title: { rendered: "A night to remember! NPM total meltdown" }
  }
];

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

      if (interceptedRequest.url().endsWith("posts")) {
        interceptedRequest.respond({
          status: 200,
          contentType: "application/json; charset=UTF-8",
          body: JSON.stringify(posts)
        });
      } else interceptedRequest.continue();

      logger.record(interceptedRequest, requestsToMock);
    });
  }
};
