let express = require('express');
let ToDoModel = require('./../models/todo.model');
let router = express.Router();


// Create New ToDo List
// POST localhost:3000/

router.post('/todo', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing')
    }
    // let todolist = {
    //     name: 'will',
    //     email: 'email@gamil.com',
    //     tOne: 'Heloo'
    // }
    let model = new ToDoModel(req.body);
     model.save().then(doc => {
         if(!doc || doc.length === 0) {
             return res.status(500).send(doc);
         }
         res.status(201).send(doc);
     })
     .catch(err => {
         res.status(500).json(err)
     })
})


// QueryString => query propery on the rquest object 
// localhost:3000/todo?id=12233&name=will

router.get('/todo', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter: email')
    }
    ToDoModel.findOne({
        email: req.query.email
    }).then(doc => {
        res.json(doc)
    }).catch(err => {
        res.status(500).json(doc);
    })
    // if(req.query.id){
    //         res.send(`You have requested a todo ID  ${req.query.id}`)
    // }else {
    //   res.send('You have requested a person');
    // }
});

// Params property on the request object 
// localhost:3000/todo/id
// router.get('/todo/:id', (req, res) => {
//     res.send(`You have requested a todo ID  ${req.params.id}`)
// });

// router.get('/error', (req, res) => {
//     throw new Error('This is forced error');
// });
module.exports = router ;