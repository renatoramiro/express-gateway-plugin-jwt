module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    pluginContext.registerPolicy(require('./policies/example-policy'));
    pluginContext.registerCondition(require('./conditions/url-match'));
  },
  policies:['test'], // this is for CLI to automatically add to "policies" whitelist in gateway.config
  options: {  // This is for CLI to ask about params 'eg plugin configure example'
    secret: {
      title: 'Secret',
      description: 'the secret',
      type: 'string',
      required: true
    }
  }
};
