const { compile } = require("handlebars");
const User = require('../database/models/user');




class AppService {

    async getUsers() {

        return User.find({}); //find all
    }

    async createUser(data) {
        const tmpuser = new User();
        tmpuser.email = data.email;
        tmpuser.host = data.post;
        console.log(data);
        tmpuser.username = data.username;

        return tmpuser.save();
    }

    async getUserByEmail(email) {
        console.log(`email  = ${email}`)
        return User.findOne({email: email});
    }

    async removeUserByEmail(email) {
        return User.findOneAndDelete({email: email});
    }

    async updateUserNameByEmail(email, userarg){
        

        console.log(`*** name=${userarg.username}, email=${email}`);
        try{
            const tmp = await User.findOne({email: email});
            if (!tmp) {
                console.error(`User with email ${emailid} not found.`);
                return null;
            }
            console.log(`TMP found = ${tmp.email}`);

            const updatedUser = await User.findOneAndUpdate(tmp._id, {username: userarg.username});
            if (!updatedUser) {
                console.error(`Failed to update user with id ${tmp._id}`);
                return null;
            }
            
            console.log(`*** Updated username to ${updatedUser.username}`);
            return await User.findOne({email: email});

        }catch(err){
            console.error(`Error updating user: ${error}`);
            throw error;
        }

    }


}

module.exports = AppService;