const http = require('http'); // Import the HTTP module

const options = {
  hostname: 'jsonplaceholder.typicode.com', // Target server
  port: 80,                                 // HTTP port
  path: '/posts/1',                         // Specific resource
  method: 'GET',                            // We're using GET here
  headers: {
    'Content-Type': 'application/json'      // Not mandatory for GET but good practice
  }
};

const req = http.request(options, (res) => {
  let data = '';

  // Collect response chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Once complete, print it
  res.on('end', () => {
    console.log('Response:', data);
  });
});

// Handle errors
req.on('error', (error) => {
  console.error('Error:', error);
});

// No request body for GET
req.end();
