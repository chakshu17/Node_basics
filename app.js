const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
	console.log("In middleware 1");
	next(); // Allows the request to continue to next middleware in line
});

app.use((req, res, next) => {
	console.log("In middleware 2");
});
const server = http.createServer(app);

server.listen(1718);
