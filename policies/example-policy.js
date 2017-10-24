var jwt = require('jsonwebtoken');

module.exports = {
  name: 'test',
  policy: (actionParams) => {
    return (req, res, next) => {
      var token = req.query.token || req.headers['x-access-token'];
      if (token) {
        jwt.verify(token, actionParams.secret, function(err, decoded) {
          if (err) return res.json({message: err.message}, 403).end();
          else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        return res.json({message: 'No token provided'}, 403);
      }
      console.log('policy', req.query);
      next();
    };
  }
};
