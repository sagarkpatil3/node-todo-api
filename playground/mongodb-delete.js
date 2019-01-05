// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('connected to Mongodb server')

    // deleteMany
    // db.collection('Users').deleteMany({name: 'sagar'}).then((res) => {
    //     console.log(res);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'lunch' }).then((res) => {
    //     console.log(res);
    // })


    // findOnedelete
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c3093a6be94de71fc9685c3') }).then((res) => {
        console.log(res);
    })

    // db.close();

});