const path = require("path");
const express = require("express");

const productsController = require('../controllers/products')
const router = express.Router();


router.get("/add-products",  productsController.getAddProduct );

// /admin/add-products =>POST req
router.post("/add-products", productsController.postAddProducts );

module.exports = router
