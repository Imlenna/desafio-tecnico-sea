const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js",
     screenshotsFolder: "testes-executados/relatorios/screenshots",
    videosFolder: "testes-executados/relatorios/videos",
    video: true,
  },
});
