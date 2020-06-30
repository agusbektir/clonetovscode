const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set heder content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<p>Hello, world!</p>');
    res.write('<p>Hello, world again!</p>');
    res.end();
});

server.listen(8000, 'localhost', () => {
    console.log('Listening for request on port 8000');
})