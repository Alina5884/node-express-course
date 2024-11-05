const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to Home Page")
    } else if (req.url === "/about") {
        res.end("About Page");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <h1>Oops!</h1>
            <p>We can't find the page you are looking for.</p>
            <a href="/">Back to Home</a>
        `);
    }
});

server.listen(3000);