const Product = require("../models/product");
const Cart = require("../models/cart");
// to get all products
exports.getProducts = (req, res, next) => {
	Product.findAll()
		.then((products) => {
			res.render("shop/product-list", {
				prods: products,
				pageTitle: "Shop",
				path: "/products",
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
// to get single product
exports.getProduct = (req, res, next) => {
	const prodId = req.params.productId;
	// Product.findAll({ where: { id: prodId } })
	// 	.then((products) => {
	// 		res.render("shop/product-details", {
	// 			product: products[0],
	// 			pageTitle: products[0].title,
	// 			path: "/products",
	// 		});
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
	 Product.findByPk(prodId)
	 	.then((product) => {
	 		res.render("shop/product-details", {
	 			product: product,
	 			pageTitle: product.title,
	 			path: "/products",
	 		});
	 	})
	 	.catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
	Product.findAll()
		.then((products) => {
			res.render("shop/index", {
				prods: products,
				pageTitle: "Shop",
				path: "/",
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getCart = (req, res, next) => {
	Cart.getCart((cart) => {
		Product.fetchAll((products) => {
			const cartProducts = [];
			for (product of products) {
				const cartProductData = cart.products.find(
					(prod) => prod.id === product.id
				);
				if (cartProductData) {
					cartProducts.push({ productData: product, qty: cartProductData.qty });
				}
			}
			res.render("shop/cart", {
				pageTitle: "Your Cart",
				path: "/cart",
				products: cartProducts,
			});
		});
	});
};

exports.postCart = (req, res, next) => {
	const prodId = req.body.productId;
	Product.findByid(prodId, (product) => {
		console.log(product.price);
		Cart.addProduct(prodId, product.price);
	});
	res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
	const prodId = req.body.productId;
	Product.findByid(prodId, (product) => {
		Cart.deleteProduct(prodId, product.price);
		res.redirect("/cart");
	});
};

exports.getOrders = (req, res, next) => {
	res.render("shop/orders", {
		pageTitle: "Your Orders",
		path: "/orders",
	});
};

exports.getCheckout = (req, res, next) => {
	res.render("shop/checkout", {
		prods: products,
		pageTitle: "Your CheckOut",
		path: "/checkout",
	});
};
