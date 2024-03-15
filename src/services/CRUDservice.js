const connection = require("../config/database");

const getAllUsers = async () => {
    const [result, fields] = await connection.query(
        `Select * from Users u`
    );
    return result;
}

const getUserById = async (userId) => {
    const [result, fields] = await connection.query(
        `Select * from Users u where id = ?`, [userId]
    )
    console.log(result);

    const user = result && result.length > 0? result[0] : {};
    return user;
}

const updateUserById = async (email, name, city, userId) => {
    const [result, fields] = await connection.query(
        `Update Users 
        SET email = ?, name = ? , city = ?
        WHERE id = ?`,
        [email, name, city, userId]);
}

const deleteUserById = async (userId) => {
    const [result, fields] = await connection.query(
        `Delete from Users where id = ?`,
        [userId]);
}
module.exports = {getAllUsers, getUserById, updateUserById, deleteUserById};