const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumberReports/cucumber-json",  // path of JSON files
  reportPath: "cypress/cucumberReports/cucumber-html", // where HTML report will be created
  metadata:{
    browser: {
      name: "chrome",
      version: "latest"
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11"
    }
  },
  customData: {
    title: "Run Info",
    data: [
      { label: "Project", value: "Cypress BDD Framework" },
      { label: "Release", value: "1.0.0" },
      { label: "Execution Start Time", value: new Date().toLocaleString() },
      { label: "Execution End Time", value: new Date().toLocaleString() }
    ]
  }
});
