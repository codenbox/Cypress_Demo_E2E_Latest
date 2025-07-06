const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");
//const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
//const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


async function setupNodeEvents(on, config) {
  //add cucumber preprocessor plugin
  await addCucumberPreprocessorPlugin(on, config);

  // Use browserify to transform feature files
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
  //Add downloadFile task plugin
  on('task', { downloadFile });
  //Add Mochawesome reporter plugin
  require('cypress-mochawesome-reporter/plugin')(on);

  return config;
}

module.exports = defineConfig({
  projectId: "bbp5e5",
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents,
    experimentalStudio:true,
   
    specPattern: 'cypress/integration/examples/cucumber_bdd/*.feature',
    //specPattern: 'cypress/integration/examples/*.js',
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
    baseUrl: 'https://demo.codenbox.com/',
    env: {
      TAGS: "@smoke",
    //   "cucumber-preprocessor": {
    //   json: {
    //     enabled: true,
    //     output: "cypress/cucumberReports/cucumber-json", // This is key!
    //   }
    // },

      // Environment-specific variables
      QA: {
        baseUrl: 'https://www.codenboxautomationlab.com',
        practiceUrl: 'https://www.codenboxautomationlab.com/practice/',
      },
      production: {
        baseUrl: 'https://demo.codenbox.com/',
        apiUrl: 'https://api.demo.codenbox.com/',
      },
      development: {
        baseUrl: 'https://dev.codenboxautomationlab.com',
        apiUrl: 'https://dev-api.codenboxautomationlab.com',
      },

      //Test data: global variables
      defaultEmail: 'demo@codenbox.com',
      defaultPassword: 'Hello123',
      defaultCommandTimeout: 6000,

      invalidEmail: 'test@test.com',
      invalidPassword: 123456

    },
  },

});
