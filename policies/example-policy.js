module.exports = {
  name: 'key-auth',
  policy: (actionParams) => {
    return (req, res, next) => {
      // eslint-disable-next-line no-console
      console.log('executing policy-from-example-plugin with params', actionParams);
    };
  }
};
