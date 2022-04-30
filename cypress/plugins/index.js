  @type {Cypress.PluginConfig}

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter')(on)
}
