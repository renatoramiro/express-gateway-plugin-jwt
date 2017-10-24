module.exports = {
  name: 'token',
  handler: function (req, conditionConfig) {
    console.log('condition', req.query);
    return false;
  }
};
