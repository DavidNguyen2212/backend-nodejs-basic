const connection = require("../config/database");
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require("../services/CRUDservice");
const User = require("../models/User");

const getHomePage = async (req, res) => {
    // đối với api, database cần dùng async await (các hoạt động tốn thời gian !!!)
    const result = await User.find({});
    console.log(result);
    return res.render('home.ejs', {listUsers: result});        
}
const getABC = (req, res) => {
    res.send("Check abc!");
}
const getHoidanIT = (req, res) => {
    res.render("sample.ejs");
}
const getCreatePage = (req, res) => {
    res.render("create.ejs");
}

const postCreateNewuser = async (req, res) => {
    // Kiểm tra data form ở client gửi lên
    let {email, name, city} = req.body;

    // create là class (model) method, còn save là instance method
    await User.create({
        email: email,
        name: name,
        city: city,
    })
    res.send("Create user success fully!");
}

const getUpdatePage = async (req, res) => {
    const user = await User.findById(req.params.userId).exec();
    res.render("edit.ejs", {userEdit: user});
}

const postUpdateUser = async (req, res) => {
    // Kiểm tra data form ở client gửi lên
    const {email, name, city, userId} = req.body;

    await User.updateOne({_id: userId}, {name: name, email: email, city: city});

    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const user = await User.findById(req.params.userId).exec();

    res.render('delete.ejs', {userEdit: user});
}

const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.userId;
    const del_result = await User.deleteOne({
        _id: userId
    })
    console.log(del_result);
    res.send("Ok, deleted");
}
// export dạng object do có nhiều handler
module.exports = {
    getHomePage, getABC, getHoidanIT, postCreateNewuser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser
}