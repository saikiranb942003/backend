const http = require('http');
// import http module
let data = { message: "Hello, world!" };

const server = http.createServer((req, res) => { // used to create server
  const method = req.method;
  const url = req.url;

  res.setHeader('Content-Type', 'application/json'); // responses will be JSON formatted

  // GET used to fetch data
  if (url === '/' && method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify(data));
  }

  // POST used to write the data
  else if (url === '/' && method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const newData = JSON.parse(body);
      data = newData;
      res.writeHead(201);
      res.end(JSON.stringify({ message: 'Data updated', data }));
    });
  }

  // PUT modify existing data
  else if (url === '/' && method === 'PUT') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const updated = JSON.parse(body);
      data.message = updated.message || data.message;
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'Data modified', data }));
    });
  }

  // DELETE used to clear the data
  else if (url === '/' && method === 'DELETE') {
    data = {};
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Data deleted' }));
  }

  // if an error is caused
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(9000, () => {
  console.log(' Server is running at http://localhost:9000');
});
