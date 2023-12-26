const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'cw4vna',
  e2e: {
    supportFile: false,
  },
  fixturesFolder: false,
  viewportHeight: 1024,
  viewportWidth: 1280,
})
