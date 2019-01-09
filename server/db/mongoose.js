var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: process.env.MONGOLAB_URI
};
mongoose.connect(db.localhost || db.mlab);


module.exports = {
    mongoose: mongoose
}