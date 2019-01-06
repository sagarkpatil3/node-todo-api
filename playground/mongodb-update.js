// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('connected to Mongodb server')

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID("5c31acfbbe94de71fc968c8d")},
        { 
            $set: { name: 'Sagar', location:'Sankeshwar' },
            $inc: { age: 2}
        },
        { returnOriginal: false}    
    ).then( (result) => {
        console.log(result);
    } );

    // db.close();

});