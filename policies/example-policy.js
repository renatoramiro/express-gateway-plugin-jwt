module.exports = {
  name: 'test',
  policy: (actionParams) => {
    return (req, res, next) => {
      console.log('policy', req.query);
      next();
    };
  }
};
