const http = require("node:http"); // có sẵn trong node js
const hostname = "127.0.0.1"; // local host ip hoặc dùng 'localhost'
const port = 3000;

// Tạo server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World CCCCC\n");
});

// Cho server chạy ở đâu + callback function
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
