const { defineConfig } = require('cypress')
const createBundler  = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin  = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
	await preprocessor.addCucumberPreprocessorPlugin(on, config);
	on("file:preprocessor",
	  createBundler({
		plugins: [createEsbuildPlugin.default(config)]
	  })
	);
	return config
}

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config){
      on('file:preprocessor', cucumber());
      return config;
    },
    includeShadowDom: true,
    supportFile: 'cypress/support/index.js',
    specPattern: ['cypress/integration/*.feature'],
    setupNodeEvents
  },
})