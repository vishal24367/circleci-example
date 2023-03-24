const { defineConfig } = require("cypress");
const { cloudPlugin } = require("@cypress/cloud-plugin");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://en.wikipedia.org/",
    specPattern: "cypress/integration/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents: (on, config) => {
      return cloudPlugin(on, config);
    },
  },
  video: true,
  videoUploadOnPasses: false,
});
