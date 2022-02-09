//cat <filename> => it prints the text file into terminal
const bcrypt = require("bcrypt");
const user = require("./users")

run();
async function run (){
    try {
        const user1 = user(
            {
                name : "Anish", 
                age : 22,
                hobbies : ["Swimming","Playing"],
                address : {
                    street : "Main st",
                    city : "Kathmandu"
                },
                email : "anish@gmail.com",
                password: "NischalShtha"
            });
        
        user1.password = await bcrypt.hash(user1.password, 10)
        console.log(user1)

        let login = {
            email: "anish@gmail.com",
            password: "NischalShtha"
        }
        
        console.log(await bcrypt.compare(login.password,user1.password))


        
    } catch (error) {
        console.log(error.message)
    }
        
    // user1.name = "Imanda";                              // Update the name
    // user1.save();
    // const user1 = new user({name : "Anish", age : 22});
    // user1.save();
    
}

// const getPasswordHash = async (password) => {
//     let hashedPassword = await bcrypt.hash(password, 10);
//     console.log(hashedPassword)
//     return hashedPassword;
// }

// const newP = getPasswordHash("nsciah")
// console.log(newP)



// bcrypt.compare(password, Hashed, function(err, result) {
//     console.log(result);
// });