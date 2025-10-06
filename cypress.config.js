const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'cw4vna',
  e2e: {
    setupNodeEvents(on, config) {
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config
    },
  },
  fixturesFolder: false,
  viewportHeight: 1024,
  viewportWidth: 1280,
})
