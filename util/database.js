const mysql = require("mysql");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	databse: "node-complete",
	password: "root",
});

module.exports = pool.promise();
