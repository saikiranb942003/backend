"use strict";

const jwt = require('jsonwebtoken');
exports.authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization; // extracts the authorization header from the incoming http request 
  // eg : Authorization : Bearer <token>
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Authorization header missing or malformed'
    });
  }
  const token = authHeader.split(' ')[1]; // splits the header value by space and extracts the token part 
  // 'Bearer abc123'.split(' ') // ['Bearer', 'abc123']
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // stores the decoded user info in req.user so it can be acceseed in the next middleware 
    next();
    // attempts to verify and decode the token using the secreat key from .env file 
    // if valid it returns the decoded payload (eg {id:1, username:"admin", exp :})
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid or expired token'
    });
  }
};