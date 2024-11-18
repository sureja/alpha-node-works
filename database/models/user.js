const { default: mongoose } = require("mongoose");

var Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    username: String,
    email: String,
    host: String
});

module.exports = mongoose.model('User', UserModelSchema);