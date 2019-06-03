const jwt = require('jsonwebtoken');
const config = require('config');


//middleware functions take in 3 things:
//request, response, next

module.exports = function() {
  //get token from the header
  const token = req.header('x-auth-token');

  //check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied'})
  }

  //verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    //last step???
    //decoded, and sent on the req.user
    req.user = decoded.user;
    //can now use this is any user protected route
    next();
  } catch(err) {
    res.status(401).json({ msg: 'Token is not valid'});
  }
}