module.exports = {
  name: 'url-match',
  handler: function (req, conditionConfig) {
    console.log(req.params);
    return (conditionConfig.expected === req.url);
  }
};
