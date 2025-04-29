/*
-> in oauth 2.0 the basic strategy is used during the token exchange
-> it authenticates a client (our app) using :
client_id
client_secret
-> these credentials are sent encoded in the authorization header using basic authenticatin
-> this strategy is only used between our app and server 
-> its not used to protect apis directly for that we use bearer tokens

Header format :
Authorization: Basic Base64(client_id:client_secret)

eg : 
Authorization: Basic Y2xpZW50SWQ6c2VjcmV0UGFzcw==
the server decodes that verifies client credentials and if valid issues an acess token



*/


const express = require('express');
const { v4: uuidv4 } = require('uuid'); // for generating unique tokens
const app = express();

// Dummy credentials (should be stored securely in real apps)
const validClientId = 'sai';
const validClientSecret = 'bsk';

const tokenStore = {}; // Structure: { token: { issuedAt: Date.now(), expiresIn: 3600 } }

// midddleware  : this functions runs before the /token route to validate client credentials
const basicAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']; // get authorization header
   // checks if it exits and it has basic or not
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }

    const base64Credentials = authHeader.split(' ')[1]; // removes "Basic " and gets the base64 string
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii'); // decodes it to a string like : clientId:clientSecret

    const [clientId, clientSecret] = credentials.split(':');

    if (clientId === validClientId && clientSecret === validClientSecret) {
        console.log(' Client authenticated successfully');
        next();
    } else {
        console.log(' Invalid client credentials');
        res.status(401).json({ message: 'Invalid client credentials' });
    }
};

// Route that generates a unique token
app.get('/token', basicAuthMiddleware, (req, res) => {
    const token = uuidv4();
    const expiresIn = 3600; // seconds
    const issuedAt = Date.now();

    tokenStore[token] = {
        issuedAt,
        expiresIn
    };

    res.json({
        access_token: token,
        token_type: 'Bearer',
        expires_in: expiresIn
    });
});

// Middleware to validate Bearer token
const bearerAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }

    const token = authHeader.split(' ')[1];
    const tokenData = tokenStore[token];

    if (!tokenData) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const { issuedAt, expiresIn } = tokenData;
    const now = Date.now();
    if ((now - issuedAt) / 1000 > expiresIn) {
        delete tokenStore[token]; // Clean up expired token
        return res.status(401).json({ message: 'Token expired' });
    }

    next(); // Token is valid
};

// Example of a protected route
app.get('/protected', bearerAuthMiddleware, (req, res) => {
    res.json({ message: 'You accessed a protected resource!' });
});


app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
/*
url : http://localhost:5000/token/
username : sai
password : Bsk
output :
{
    "message": "Invalid client credentials"
}

url : http://localhost:5000/token/
username : sai
passwird : bsk
output :
{
    "access_token": "mocked-access-token",
    "token_type": "Bearer",
    "expires_in": 3600
}


*/

