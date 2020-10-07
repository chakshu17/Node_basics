const express = require("express");

const app = express();

app.use((req, res, next) => {
	console.log("In middleware 1");
	next(); // Allows the request to continue to next middleware in line
});

app.use((req, res, next) => {
  console.log("In middleware 2");
  res.send('<h1>Hello From Express</h1>');
});
app.listen(1718)  // create server with provided port no.

