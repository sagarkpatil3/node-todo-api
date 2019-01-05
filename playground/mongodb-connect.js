// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('connected to Mongodb server')

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // },(err, res) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //         console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'sagar',
    //     age: 24,
    //     loaction: 'Sankeshwar'
    // }, (err, res) =>{
    //     if(err) {
    //         console.log('Unable to insert', err)
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })

    db.close();

});