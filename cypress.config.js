const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://computer-database.herokuapp.com/computers",
    grepFilterSpecs: true,
    grepOmitFiltered: true,
    timeout: 60,
    USERNAME: "it.dung91@gmail.com",
    PASS:"Dung123@"
  },

  fixturesFolder: "cypress/fixture",
  screenshotsFolder: "cypress/reports/mochareports/assets",
  videosFolder: "cypress/output/sources/videos",
  downloadsFolder: "cypress/output/sources/downloadedfiles",
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 120000,
  video: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
      screenshotOnRunFailure: true
    }
  },

  e2e: {
    baseUrl: "https://juice-shop.guardrails.ai",
    setupNodeEvents(on, config) {
      // return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/test/**/*.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/*.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 10000
  },

  component: {
    specPattern: "cypress/test/**/*.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/*.{js,jsx,ts,tsx}"
  }
});
