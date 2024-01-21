const express = require("express");
const {getHomePage, getABC, getHoidanIT} = require('../controllers/homeController')
const router = express.Router();

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/xyz", getHoidanIT);

module.exports = router;