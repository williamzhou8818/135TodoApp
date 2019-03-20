let express = require('express');
const todoDatas = require('./../models/todo.model');
const  User = require('../models/user.model');

const mongoose = require('mongoose');
// let Story  = require('./../models/populate.model');
let router = express.Router();

// Note Need Change ToDo Save method Save as Email or UserID


// Create New ToDo List
// POST localhost:3000/

// let  Users = new User({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'zhouli',
//   email : 'zhouli@gmail.com',
//   username: 'zhouli',
//   password: 123456,
// });

// Users.save(function (err) {
//   if (err) return handleError(err);

//   let ToDoModel = new todoDatas({
//     tOne: 'Casino Royale',
//     tMed_1:'HEllo',
//     tMed_2:'HEllo2',
//     tMed_3:'HEllo2',
//     byuser: User._id    // assign the _id from the person
//   });

//   ToDoModel.save(function (err) {
//     if (err) return handleError(err);
//     // thats it!
//   });
// });
// User.
//   findOne({ email: 'zhouli@gmail.com' }).
//   populate('todos').
//   exec(function (err) {
//     if (err) return handleError(err);
//     console.log('The TOne is %s', ToDoModel.tMed_1);
//     // prints "The author is Ian Fleming"
//   });

// let  ToDoModel = new todoDatas({
//     _id: new mongoose.Types.ObjectId(),
//     tOne: 'Make sen',
//     tMed_1:'HEllo222',
//     tMed_2:'HEllo2',
//     tMed_3:'HEllo2'
// });

// ToDoModel.save(function (err) {
//   if (err) return handleError(err);

//   let Users = new User({
//      name: 'Nahor',
//      email : 'nahor@gmail.com',
//      username: 'nahor',
//      password: 123456,
//      todos: ToDoModel._id    // assign the _id from the person
//   });

//   Users.save(function (err) {
//     if (err) return handleError(err);
//     // thats it!
//   });
// });
//Find Todo ListBy bodyEmail

// User.
//   findOne({ email: 'nahor@gmail.com' }).
//   populate('todos').
//   exec(function (err, todo) {
//     if (err) return handleError(err);
//     console.log('The TOne is %s', todo.todos.tMed_2);
//     // prints "The author is Ian Fleming"
//   });


router.post('/todo', (req, res, next) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing')
    }

    const newTodoDatas = new todoDatas({
      _id: new mongoose.Types.ObjectId(),
      tOne: req.body.oneBigest,
      tMed_1:req.body.med_1,
      tMed_2:req.body.med_2,
      tMed_3:req.body.med_3,
      tSmall_1: req.body.sml_1,
      tSmall_2: req.body.sml_2,
      tSmall_3: req.body.sml_3,
      tSmall_4: req.body.sml_4,
      tSmall_5: req.body.sml_5
      });
     newTodoDatas.save().then(doc => {
        // let Users = new User({

        //  todos: ToDoModel._id 
         
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

// Make Tasks Rout
// router.get('/tasks', passport.authenticate('jwt', {session: false}),(req, res, next) => {
//         // res.json({user: req.user});
// });

// Params property on the request object 
// localhost:3000/todo/id
// router.get('/todo/:_id', (req, res) => {

//    ToDoModel.findById(req.params._id)
//         .then(todo => {
//             if (!todo) { return res.status(404).end();}
//             return res.status(200).json(todo);
//         })
//         .catch(err => next(err));
      
// });
router.get('/todos', (req, res) => {

    todoDatas.find()
        .sort({'date': 1})
        .then(todo => {
            if (!todo) { return res.status(404).end();}
            return res.status(200).json(todo);
        })
        .catch(err => next(err));
      
});

router.get('/todos/:email', (req, res) => {
    const  _email = req.params.email;
    User.findOne({email: _email})
        .populate('todos')
        .sort({'date': 1})
        .then(todo => {
            if (!todo) { return res.status(404).end();}
            return res.status(200).json(todo);//todo.todos.tMed_1
        })
        .catch(err => next(err));

});

// router.get('/datas', (req, res, next) => {
//     Story.findOne({title: 'Casino Royale'}).
//     populate('author').
//     then(data => {
//         if(!data) { return res.status(404).end(); }
//         return res.status(200).json(data);
//     })
//     .catch(err => next(err));
// });
// router.get('/error', (req, res) => {
//     throw new Error('This is forced error');
// });
module.exports = router ;