
module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers['origin']);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  next();
};
