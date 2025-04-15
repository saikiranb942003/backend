const http = require('http');
// imports built-in http module in node.js 
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js!');
});
// http.createServer() creates a new web server
/* 
(req, res) => {} :
This is a callback function that runs every time someone makes a request to your server.
req: the request object (contains info like URL, headers, etc)
res: the response object (you use this to send data back)

*/

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
/*
server.listen(3000,):
Starts the server and listens for requests on port 3000.

() => { console.log() }:
A callback that runs once the server is successfully started — it prints a message in our terminal.
*/




