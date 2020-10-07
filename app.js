const express = require("express");

const app = express();
// help us to router the middlewares

app.use("/", (req, res, next) => {
  console.log("In Alaways runs");
  next();
});
app.use("/add-product", (req, res, next) => {
	console.log("In middleware");
	res.send("<h1>The 'Add Product Page '</h1>");
});

app.use("/", (req, res, next) => {
	console.log("In middleware");
	res.send("<h1>Hello From Express</h1>");
});
app.listen(1718); // create server with provided port no.
