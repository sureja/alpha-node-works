//import mongoose
var mongoose = require('mongoose');

//Setup default mongoose connection
var mongoDB = 'mongodb://localhost:27017/my_testdatabase';
mongoose.connect(mongoDB, {useNewUrlParser: true});

//Get default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on ('error', console.error.bind(console, 'MonngoDB connection error:'));
db.on ('connected', console.log.bind(console, 'MonngoDB connection success:'));