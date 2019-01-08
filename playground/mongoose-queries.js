const { ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5c31d8d541406b811af5828b';

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo)
// });

User.findById(id).then((user) => {
    if(!user){
        console.log('User not found');
    }
    console.log("User by Id:",JSON.stringify(user, undefined,2))
}).catch( (err) => console.log(err));

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log("Todo by id", todo)
// }).catch((e) => console.log(e));