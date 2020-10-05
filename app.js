// const http = require('http')
// function rqListener(req,resp){ }
// http.createServer(rqListener)
// how to create our own server

const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	// process.exit() it exit the process delibrately

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head>My first page in Node</head>");
	res.write("<body><h1>hello their man </h1></body>");
	res.write("</html>");
	res.end();
});

server.listen(3000);
