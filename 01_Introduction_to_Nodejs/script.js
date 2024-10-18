// Load the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set HTTP status code
    res.setHeader('Content-Type', 'text/plain'); // Set response headers
    res.end('Hello, World!\n'); // Send response
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
