const jwt = require('jsonwebtoken');
require('dotenv');

const jwtKey = process.env.JWT_KEY;

module.exports = (req, res, next) => {
  const token = req.headers['authorization'] || req.cookies['authorization'] || req.query['authorization'];

  jwt.verify(token, jwtKey, function (err, data) {
    if (err) {
      next();
    } else {
      req.custom_user = {...data, token: token};
      next();
    }
  });
};