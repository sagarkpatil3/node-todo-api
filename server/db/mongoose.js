var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sagarkp3@gmail.com:Sagarkp3@ds237713.mlab.com:37713/mongoose-node' || 'mongodb://localhost:27017/TodoApp');


module.exports = {
    mongoose: mongoose
}