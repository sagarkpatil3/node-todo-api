const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken')

// jwt.verify 

var data = {
    id:10
};

var token = jwt.sign(data,'123abc');
console.log(token)
 
var decoded = jwt.verify(token, '123abc');
console.log(decoded)

// var message = 'Hi i am sagar';
// var hash = SHA256(message).toString();

// console.log(hash);