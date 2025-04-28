/*
->oauth is open authorization is an open standard for access delegation commonly
used for token based authentication and authorization 
-> it allows third party services to exchange access rights without exposing user credentials
-> there are different stratagies or flows depending on the case 
-> two commonly discussed token types within oauth are basic and bearer authentication

// Basic authentication

-> basic authenication is not a part of oauth itself but is often used with oauth flow when exchanging
client credetials for a token

// working 

-> the client app sends a Base64-encoded string containing the client_id and client_secret in the request header
-> the format is :
Authorization : Basic Base64(cient_id : client_secret)
-> we use this during the oauth 2.0 client credentials flow or authorization code flow (when exchanging the code for a token)

eg:
POST /oauth/token
Host: auth.example.com
Authorization: Basic dGVzdF9jbGllbnQ6dGVzdF9zZWNyZXQ=
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials

// uses:

-> simple to implement
-> works well for trusted clients (backend services)

// Disadvatages

-> credentials are sent with every request (even if encoded, not encryptd)
-> not suitable for public clients

// Bearer token authetication

-> bearer authetication is the actual method used for making authenticated requests
once the oauth flow is completed and an access token is issued

// working 

-> the client includes the token in the authorization header when accessing a protected resource
-> Authorization: Bearer <access_token>

eg : 
GET /api/userinfo
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

advantages : 
-> it is stateless that is no session needed the token itself holds the required info
-> can be used across multiple services (jwt)
-> standared for api authentication

// disadvantages
-> token theft : unauthorized access (like someone stealing the key)
-> should be transmitted only over https to prevent eavesdropping





*/
