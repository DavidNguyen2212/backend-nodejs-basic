const express = require("express");
const path = require("path");
// Không thể viết
// import express from 'express'
require('dotenv').config();
// console.log(">> Check env: ", process.env);

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// Cấu hình Template Engine
app.set("views", path.join(__dirname, "views"));
// Chỉ định T.E cụ thể
app.set("view engine", "ejs");

// Cấu hình static files
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.send("Hello World! ff");
});

app.get("/abc", (req, res) => {
  res.send("Check abc!");
});

app.get("/xyz", (req, res) => {
  //res.send("<h1>Toi la An nguyen</h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});