var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: process.env.MONGOLAB_URI = 'mongodb://sagarkp3@gmail.com:Sagarkp3@ds237713.mlab.com:37713/todoapp'
};
mongoose.connect(db.mlab || db.localhost );


module.exports = {
    mongoose: mongoose
}