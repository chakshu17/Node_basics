// const http = require('http')

// function rqListener(req,resp){

// }

// http.createServer(rqListener)

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000)