const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end("welcome to our home page");
    }

    if (req.url === '/about') {
        res.end('Here is the short hostory');
    }

    res.end("<h1>Oops!</h1><p>We cant seem to find the page you're looking for</p><a href='/'>Back home</a>");
});

server.listen(5000);