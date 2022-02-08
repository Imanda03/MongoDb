const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    age : Number
})

//BY using module.exports we can use it in other places
module.exports = mongoose.model("users",userSchema);