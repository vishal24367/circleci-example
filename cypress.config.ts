import { defineConfig } from "cypress";
import { cloudPlugin } from "cypress-cloud/plugin";

export default defineConfig({
  e2e: {
    baseUrl: "https://todomvc.com/examples/vanillajs",
    specPattern: "cypress/e2e/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents: (on, config) => {
      return cloudPlugin(on, config);
    },
  },
  video: true,
  videoUploadOnPasses: false,
});
