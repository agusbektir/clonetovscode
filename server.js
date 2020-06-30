const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set heder content type
    res.setHeader('Content-Type', 'text/plain');

    res.write('Hello, world!');
    res.end();
});

server.listen(8000, 'localhost', () => {
    console.log('Listening for request on port 8000');
})