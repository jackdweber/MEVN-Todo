//File used for setting up mongoose
var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost:27017/todos';
mongoose.connect(dbUrl);
// Close the Mongoose connection on Control+C
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
}); });

//Require the file used to hold schema information
require('./todo');
