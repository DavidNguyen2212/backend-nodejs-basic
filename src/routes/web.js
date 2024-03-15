const express = require("express");
const {getHomePage, getABC, getHoidanIT, postCreateNewuser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser} = require('../controllers/homeController');
const router = express.Router();

// Sau này muốn biết một đống code hoạt động thế nào thì đi từ route.js
router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/xyz", getHoidanIT);
router.get("/create", getCreatePage);
router.get("/update/:userId", getUpdatePage);

router.post("/create_user", postCreateNewuser);
router.post("/update_user", postUpdateUser);
router.post("/delete_user/:userId", postDeleteUser);
router.post("/delete_user", postHandleRemoveUser);



module.exports = router;