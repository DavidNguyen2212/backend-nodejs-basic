require('dotenv').config();
// console.log(">> Check env: ", process.env);
const express = require("express");
const path = require("path");
// Không thể viết // import express from 'express'

// nhập khẩu tệp config
const configviewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// Cấu hình
configviewEngine(app);

app.use('/v1', webRoutes);  // các đường link trong webroutes sẽ đứng sau '/'
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
