const http = require('http'); // Import built-in HTTP module

const data = JSON.stringify({
  name: 'Alice',
  job: 'Developer',
  salary : 12000
}); // Data we want to send to the server

const options = {
  hostname: 'jsonplaceholder.typicode.com', // API host
  port: 80,                                 // Port for HTTP (80 = default)
  path: '/posts',                           // API endpoint
  method: 'POST',                           // HTTP method
  headers: {
    'Content-Type': 'application/json',     // Telling server we're sending JSON
    'Content-Length': data.length           // Length of the request body
  }
};

const req = http.request(options, (res) => {
  let responseData = '';

  // Collect the data chunks sent by the server
  res.on('data', (chunk) => {
    responseData += chunk;
  });

  // When all data is received, log it
  res.on('end', () => {
    console.log('Response:', responseData);
  });
});

// If any error occurs in request
req.on('error', (error) => {
  console.error('Error:', error);
});

// Write the actual data into the request body
req.write(data);

// Signal the end of the request
req.end();
