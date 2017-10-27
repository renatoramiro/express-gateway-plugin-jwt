module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    pluginContext.registerPolicy(require('./policies/example-policy'));
  },
  policies:['jwt'], // this is for CLI to automatically add to "policies" whitelist in gateway.config
  options: {  // This is for CLI to ask about params 'eg plugin configure example'
    secret: {
      title: 'Secret',
      description: 'the secret',
      type: 'string',
      required: true
    }
  }
};
