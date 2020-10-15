const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const router = express.Router();

const products = [];

// /admin/add-products =>GET req
// In render method "add-product" is the name of file which you want to render without the extension
// it refer to that view without adding file src, if not you can add the path without extension
router.get("/add-products", (req, res, next) => {
	res.render("add-product", { 
		pageTitle: "Add Product",
		path: "/admin/add-products",
	});
});

// /admin/add-products =>POST req
router.post("/add-products", (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect("/");
});

exports.routes = router;
exports.products = products;
