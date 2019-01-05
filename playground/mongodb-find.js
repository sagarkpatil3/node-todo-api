const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('connected to Mongodb server')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c307887da9d715b436396a9')
    // } ).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err)
    // }); 

    db.collection('Users').find({name:'sukrut'}).toArray().then((count) => {
        console.log(`Todos count: ${JSON.stringify(count, undefined,2)}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err)
    }); 
    db.close();

});