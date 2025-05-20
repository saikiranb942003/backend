/*
// JWT expiration time
-> jwt expiration time (exp) is a claim (field) in the jwt payload that defines the exact 
time when the jwt will become invalid 

// working 
-> the expiration time is specified as a unix timestamp (seconds since the unix epoch)
-> when the jwt is generated the server sets an exp (expiration) claim in the payload 
-> after the expiration time the jwt is considered invalid 
-> the server or the client can check this expiration time before accepting the jwt 

// structure of the jwt with expiration 

{
  "sub": "1234567890",
  "name": "kiran",
  "exp": 1718992946  // Expiration time (Unix Timestamp)
}

-> in the above example exp is set to a specific timestamp 
-> the jwt is only valid until this timestamp
*/
/*
-> when a client sends a jwt the server decodes it
-> the server checks the exp claim in the payload 
-> if the current time is greater than the exp time the jwt is rejected as expired 

*/
// jwtExpiration.js
require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

const secretKey = process.env.JWT_SECRET || "default_secret_key";

// Middleware to protect routes
function authenticateJWT(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid or expired" });
    }
    req.user = user;
    next();
  });
}

// Protected route
app.get("/protected", authenticateJWT, (req, res) => {
  res.send(`Hello ${req.user.name}, you have access to this route.`);
});

// Generate JWT Route (For Testing)
app.get("/generate-token", (req, res) => {
  const token = jwt.sign({ name: "kiran" }, secretKey, { expiresIn: "1h" });
  res.json({ token });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


/*
-> the client must request a new jwt (typically by logging in again) 
-> or the server can use jwt refresh tokens for automatic renewal (commonly used in secure apis) 

// best practices

-> set a short expiration time for jwt (15-30 min) 
-> use of refresh tokens for long term authentication 
-> secure our jwt using https to prevent interception 
-> do not store jwts in localstorage (use httpOnly cookies instead)




*/

