const express = require("express");
const path = require("path");
// Không thể viết
// import express from 'express'
const app = express();
const port = 8080;

// Cấu hình Template Engine
app.set("views", path.join(__dirname, "views"));
// Chỉ định T.E cụ thể
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Check abc!");
});

app.get("/xyz", (req, res) => {
  //res.send("<h1>Toi la An nguyen</h1>");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
