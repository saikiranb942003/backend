/*
-> in oauth 2.0 the basic strategy is used during the token exchange
-> it authenticates a client (our app) using :
client_id
client_secret
-> these credentials are sent encoded in the authorization header using basic authentication
-> this strategy is only used between our app and server 
-> it's not used to protect APIs directly — for that we use bearer tokens

Header format :
Authorization: Basic Base64(client_id:client_secret)

eg : 
Authorization: Basic Y2xpZW50SWQ6c2VjcmV0UGFzcw==
The server decodes that, verifies client credentials, and if valid, issues an access token
*/

// Dummy credentials (should be stored securely in real apps)
const validClientId = 'sai';
const validClientSecret = 'bsk';

// middleware: this function runs before the /token route to validate client credentials
const basicAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']; // get authorization header

    // check if it exists and starts with Basic
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }

    const base64Credentials = authHeader.split(' ')[1]; // remove "Basic " and get the base64 string
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii'); // decode it to a string like: clientId:clientSecret

    const [clientId, clientSecret] = credentials.split(':');

    if (clientId === validClientId && clientSecret === validClientSecret) {
        console.log(' Client authenticated successfully');
        next();
    } else {
        console.log(' Invalid client credentials');
        res.status(401).json({ message: 'Invalid client credentials' });
    }
};

module.exports = basicAuthMiddleware;
