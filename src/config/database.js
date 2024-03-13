require("dotenv").config()
const mysql = require("mysql2")


// New way: connection pool
const connection =  mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // default 3306
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = connection;
  