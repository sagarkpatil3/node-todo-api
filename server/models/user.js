var mongoose = require('mongoose');


var User = mongoose.model('User', {
    userName: {
        type: String,
        minlength: 1
    },
    email: {
        type: String,
        minlength: 3,
        required: true
    }
});

module.exports = { User }