const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'cw4vna',
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
  fixturesFolder: false,
  viewportHeight: 1024,
  viewportWidth: 1280,
})
