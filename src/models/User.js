const mongoose = require("mongoose");

// Shape of the data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
  })
  
  // Create the table (collection) based on above shape
const User = new mongoose.model('user', userSchema);
  // 'new' and save a row (document) in that table
// const silence = new Kitten({name: "Silence"});
// silence.save();

module.exports = User;
  
  