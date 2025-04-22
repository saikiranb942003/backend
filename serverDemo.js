const http = require('http');

// Sample data to return
let data = { message: "Hello this is kumar!" };

// Create the HTTP server
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

// Listen on port 9000
server.listen(9000, () => {
  console.log('Server is running at http://localhost:9000');
});
