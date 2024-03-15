require('dotenv').config();
// console.log(">> Check env: ", process.env);
const express = require("express");
const path = require("path");
// Get the client
const connection = require("./config/database")
// Không thể viết // import express from 'express'

// nhập khẩu tệp config
const configviewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// Cấu hình req.body
app.use(express.json()) // for json;
app.use(express.urlencoded({extended: true})) // for form data;

// Cấu hình
configviewEngine(app);

app.use('', webRoutes);  // các đường link trong webroutes sẽ đứng sau '/'


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
