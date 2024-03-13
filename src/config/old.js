require("dotenv").config()
const mysql = require("mysql2")

// Test connection 
// Create the connection to database (old way)
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // default 3306
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
});


module.exports = connection;
  