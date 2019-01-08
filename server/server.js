var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var { ObjectID } = require('mongodb');


var app = express();
const port = process.env.PORT || 3000;
// MiddleWare
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((todos)=>{
        res.status(200).send(todos);
        // console.log("Successfully inserted -:", JSON.stringify(todos,undefined,2));
    },(err) => {
        res.status(400).send(err);
        // console.log('Error in insertion', err);
    });
});

app.get('/todos', (req, res) => {
    console.log(res.body);
    Todo.find().then( (todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);    
    })
})



app.get('/todos/:id',(req,res) => {
    var id = req.params.id;
    // res.send(req.params);
    if(!ObjectID.isValid){
        res.status(404).send();
    } else {
        Todo.findById(id).then( (todo)=> {
            if(!todo) {
                return res.status(404).send();
            }
            res.send({ todo });
        }).catch((err) => {
            res.status(404).send(err);
        })
    } 
})



app.listen(port, () => {
    console.log(`Started on port at:- ${port}`);
});


module.exports = { app };