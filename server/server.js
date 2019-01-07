var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

// MiddleWare
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
        // console.log("Successfully inserted -:", JSON.stringify(doc,undefined,2));
    },(err) => {
        res.status(400).send(err);
        // console.log('Error in insertion', err);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
})