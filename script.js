/* step 1 -> npm init -y
Step 2 -> npm i mongoose                to install the mongoose
Step 2 -> npm i --save-dev nodemon      to refresh auto when we save
Then go to package.json and change test to "dev": nodemon script.js

npm run dev   will start running the program and show output
*/
const mongoose = require('mongoose');
const { getMaxListeners } = require('./users');

const user = require("./users")

mongoose.connect("mongodb://localhost/students");

run();
async function run() {
    try {
        const user1 = await user.create(
            {
                name: "Anish",
                age: 22,
                hobbies: ["Swimming", "Playing"],
                address: {
                    street: "Main st",
                    city: "Kathmandu"
                },
                email: "anish@gmail.com",
                password: "Anish"
            });
        console.log(user1);

    } catch (error) {
        console.log(error.message)
    }

    // user1.name = "Imanda";                              // Update the name
    // user1.save();
    // const user1 = new user({name : "Anish", age : 22});
    // user1.save();

}