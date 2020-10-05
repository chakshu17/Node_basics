// const http = require('http')
// function rqListener(req,resp){ }
// http.createServer(rqListener)
// how to create our own server

const http = require("http");

const server = http.createServer((req, res) => {
	//	console.log(req.url, req.method, req.headers);
	// process.exit() it exit the process delibrately

	const url = req.url;
	if (url === "/") {
		res.write("<html>");
		res.write("<head>Enter Message</head>");
		res.write(
			"<body> <form action='/message' method='POST'> <input type='text' name='message'/> <button type=''submit>Send</button> </form> </body>"
		);
		res.write("</html>");
	  return res.end();
	}
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<body><h1>Hello their Man </h1></body>");
	res.write("</html>");
	res.end();
});

server.listen(3000);
