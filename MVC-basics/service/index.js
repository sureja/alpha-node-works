const { compile } = require("handlebars");
const User = require('../database/models/user');

// class AppService {

//     // getData(req, res) {
//     //     // db.model.findOne(id)
//     //     res.status(200).json({"message" : "ok!!!"});
//     // }

//     // createData(data) {
//     //     //return db.model.save(data);
//     // }

//     // updateData(req, res) {
//     //     res.status(200).json({});
//     // }

//     // deleteData(req, res) {
//     //     res.status(200).json({});
//     // }
// }

let user = [
    {
        username: 'srj',
        email: 'srjtest@outlook.com'
    },
    {
        username: 'cbr',
        email: 'cloudbaron@outlook.com'
    }
];

class AppService {

    getUsers() {

        return User.find({}); //find all
    }

    createUser(data) {
        const tmpuser = new User();
        tmpuser.email = data.email;
        tmpuser.host = data.post;
        console.log(data);
        tmpuser.username = data.username;

        return tmpuser.save();
    }

    getUserByEmail(email) {
        console.log(`email  = ${email}`)
        return User.findOne({email: email});
        //return user.filter (item => { return item.email === email});
    }

    removeUserByEmail(email) {
        //const tempdata = user.filter (item =>  item.email !== email);
        //user = tempdata;
        //return user;

        return User.findOneAndDelete({email: email});
    }

    updateUserNameByEmail(email, userarg){
        

        console.log(`*** name=${userarg.username}, email=${email}`);


        return User.findOne({email: email})
        .then(tmp => {
            
            if (!tmp) {
                console.error(`User with email ${emailid} not found.`);
                return null;
            }
            console.log(`TMP found = ${tmp.email}`);
            return User.findOneAndUpdate(tmp._id, {username: userarg.username})
            .then(updatedUser => {
                if (!updatedUser) {
                    console.error(`Failed to update user with id ${tmp._id}`);
                    return null;
                }
                
                console.log(`*** Updated username to ${updatedUser.username}`);
            })
            .catch(err =>{ throw err});
    
        })
        .catch(err => {throw err;} );

        //console.log(`*** Found name=${tmp.username}, email=${email}`);

        //return User.findByIdAndUpdate(tmp._id, {username: username});

    }

    updateUserNameByEmail_old(email, userarg){

        
        console.log(`*** name=${user.name}, email=${email}`);
        const {username, emailid} = userarg;

        const tmp = User.find({email: emailid});

        console.log(`tmp User details ${tmp.emailid}, ${tmp._id}`);

        return User.findByIdAndUpdate(tmp._id, {username: username});
        // user.forEach( item => {
        //     if (email === item.email) {
        //         item.username = username;
        //     }

        //     console.log (`Item =  ${item.username} ${item.email}`);
        // });
    
        // const selectedUser = user.filter (item => {
        //     return item.email === email
        // }) || [];
    
        // return selectedUser;
    };

}

module.exports = AppService;