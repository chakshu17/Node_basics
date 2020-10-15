const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const rootDir = require("./util/path");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");// for telling that we have files in views folder.
						//If name of views folder is different than views

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // for styling , we give path to file for html

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).render('404');
});

app.listen(1718);
