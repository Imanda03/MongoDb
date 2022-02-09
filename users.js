const mongoose = require('mongoose');

// user.find() and user.findOne() will find the data inside the databse
// user.delete() and user.deleteOne() will delete the data which you give inside the brackets
// where().ewuals() also do the same thing as user.find(3)
// where(age).gt()      It find the age greater than number given in the brackerts

const adressSchema = new mongoose.Schema({
    street : String,
    city : String
})
const userSchema = new mongoose.Schema({
    name : String,
    age : {
        type : Number,
        // min : 5,
        // max : 30
    },
    email : {
        type : String,
        // minlength : 10,
        required : true,
        lowercase : true
    },
    password :{
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        immutable : true,           //Immutable mean once it is created Then it can be changed another time.
        default : () => Date.now()
    },
    updatedAt : {
        type : Date,
        default : () => Date.now()
    },  
    //To print out the bestfriend from other we have to use .populate("bestFriend")
    // bestFriend : mongoose.Types.ObjectId(),                      //It give the id of another id
    hobbies : [String],
    address : adressSchema
    // { We can create address by other way too
    //     street : String,
    //     city : String
    // }
})

//BY using module.exports we can use it in other places
module.exports = mongoose.model("users",userSchema);