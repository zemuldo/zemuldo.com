const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_KEY;

module.exports = {
  sign: (data) =>{
    return jwt.sign({id: data}, jwtKey, {expiresIn: 24 * 60 * 60});
  }
};