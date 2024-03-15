const connection = require("../config/database")
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require("../services/CRUDservice")

const getHomePage = async (req, res) => {
    // đối với api, database cần dùng async await
    const result = await getAllUsers();
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

    console.log(">> email = ", email, ", name = ", name, ",  city = ", city);

    // Using placeholders through an array
    const [result, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) values (?, ?, ?)`,
    [email, name, city]);

    res.send("Create user success fully!");
}

const getUpdatePage = async (req, res) => {
    const user = await getUserById(req.params.userId)
    console.log(user)
    res.render("edit.ejs", {userEdit: user});
}

const postUpdateUser = async (req, res) => {
    // Kiểm tra data form ở client gửi lên
    const {email, name, city, userId} = req.body;
    await updateUserById(email, name, city, userId);
    // res.send("Update user success fully!");
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const user = await getUserById(req.params.userId);
    res.render('delete.ejs', {userEdit: user});
}

const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.userId;
    await deleteUserById(userId);
    res.send("Ok, deleted");
}
// export dạng object do có nhiều handler
module.exports = {
    getHomePage, getABC, getHoidanIT, postCreateNewuser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser
}