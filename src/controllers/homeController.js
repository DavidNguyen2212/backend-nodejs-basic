const getHomePage = (req, res) => {
    // process data tại đây
    // call model
    res.send("Hello World! ff");
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