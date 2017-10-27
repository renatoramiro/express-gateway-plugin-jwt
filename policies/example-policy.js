var jwt = require('jsonwebtoken');

module.exports = {
  name: 'jwt',
  policy: (actionParams) => {
    return (req, res, next) => {
      var token = req.query.token || req.headers['x-access-token'];
      if (token) {
        jwt.verify(token, actionParams.secret, function(err, decoded) {
          if (err) res.status(403).json({message: err.message}).end();
          else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        res.status(403).json({message: 'No token provided'}).end();
      }
    };
  }
};
