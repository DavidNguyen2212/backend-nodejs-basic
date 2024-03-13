const connection = require("../config/database")


const getHomePage = (req, res) => {
    // process data tại đây
    // call model
    let users = []
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results
            console.log(">>> Result home page = ", results)
            console.log(">>> Checkusers: ", users)
            res.send(JSON.stringify(users))
        }
    )
        
}
const getABC = (req, res) => {
    res.send("Check abc!");
}
const getHoidanIT = (req, res) => {
    res.render("sample.ejs");
}

// export dạng object do có nhiều handler
module.exports = {
    getHomePage, getABC, getHoidanIT
}