const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");

const rootDir = require("./util/path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // for styling , we give path to file for html

app.use((res, req, next) => {
	User.findByPk([1])
		.then(user=>{
			req.user = user;
			next();
		})
		.catch((err) => {
			console.log(err);
		});
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

sequelize
	.sync()
	.then((result) => {
		return User.findByPk(1);
	})
	.then((user) => {
		if (!user) {
			User.create({
				name: "Chakshu",
				email: "chakshu@gmail.com",
			});
		}
		return user;
	})
	.then((user) => {
		// console.log(user);
		app.listen(1718);
	})
	.catch((err) => {
		console.log(err);
	});
