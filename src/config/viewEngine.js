// Bỏ các cấu hình viewEngine vào đây
const path = require("path");
const express = require("express");

const configviewEngine = (app) => {
    // console.log("cc: ", path.join('./src', "views"))
    // Cấu hình Template Engine
    app.set("views", path.join('./src', "views"));
    // Chỉ định T.E cụ thể
    app.set("view engine", "ejs");

    // static files
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configviewEngine;  