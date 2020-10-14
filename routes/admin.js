const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const router = express.Router();

const products = [];

// /admin/add-products =>GET req
router.get("/add-products", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-products =>POST req
router.post("/add-products", (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect("/");
});

exports.routes = router;
exports.products = products;
