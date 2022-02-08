const mongoose = require('mongoose');

const user = require("./users")

mongoose.connect("mongodb://localhost/students");

const user1 = new user({name : "Anish", age : 22});
user1.save().then(() =>{console.log("User Saved")})