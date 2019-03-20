const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user.model');


// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        bigestone: req.body.bigestone,
        medone: req.body.medone,
        medtwo: req.body.medtwo,
        medthree: req.body.medthree,
        smlone: req.body.smlone,
        smltwo: req.body.smltwo,
        smlthree: req.body.medthree,
        smlfour: req.body.smlfour,
        smlfive: req.body.smlfive

    });
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({success: false, msg: 'Failed to register user '});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    }); 
});

// Update User model

router.post('/bigesttodos/:id', function(req, res){
    User.findOneAndUpdate({
        _id: req.params.id
    }, 
        {$push:{
              
                bigestone: {
                        bigestone: req.body.bigestone
                   }
                // bigestone: {"bigstone": req.body.bigestone},
            },
        },
        {upsert: true},
            function(err, newTodos) {
                if(err) {
                    console.log('error occured');
                } else {
                    res.json(newTodos);
                    console.log(newTodos);
                }
            });
});

// Get BigestTodo List
router.get('/alltodo', passport.authenticate('jwt', {session: false}), (req, res, next) => {
     User.find().then(todos => {
         if(!todos) {return res.status(404).end(); }
         return res.status(200).json(todos);
     }).catch(err => next(err));
});

// end

router.post('/medtodos/:id', function(req, res){
    const medtodos = {"medtodo" : req.body.medtodo};
    User.findOneAndUpdate({
        _id: req.params.id
    }, 
        {$push:{
                medtodo: {
                    medtodo: req.body.medtodo
                }
            },
        },
        {upsert: true},
            function(err, newTodos) {
                if(err) {
                    console.log('error occured');
                } else {
                    res.json(newTodos);
                    console.log(newTodos);
                }
            });
});

// Start working on small todo list
router.post('/smltodos/:id', function(req, res){
    const smltodos = {"smltodo" : req.body.smltodo};
    User.findOneAndUpdate({
        _id: req.params.id
    }, 
        {$push:{
                smltodo: smltodos,
            },
        },
        {upsert: true},
            function(err, newTodos) {
                if(err) {
                    console.log('error occured');
                } else {
                    res.json(newTodos);
                    console.log(newTodos);
                }
            });
});



// Authenticate 

router.post('/autheticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User Not Found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1week
                });
                res.json({
                    success: true,
                    token: 'JWT' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        bigestone: user.bigestone,
                        medtodo: user.medtodos
                        // medone: user.medone,
                        // medtwo: user.medtwo,
                        // medthree: user.medthree,
                        // smlone: user.smlone,
                        // smltwo: user.smltwo,
                        // smlthree: user.smlthree,
                        // smlfour: user.smlfour,
                        // smlfive: user.smlfive
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        })
    });
});

// Profile 
router.get('/todos', passport.authenticate('jwt', {session: false}), (req, res, next) => {
     //res.send('PROFILE');
    res.json({user: req.user});
});

router.get('/todosmed', passport.authenticate('jwt', {session: false}), (req, res, next) => {
     //res.send('PROFILE');
    res.json({user: req.user});
});

router.get('/todossml', passport.authenticate('jwt', {session: false}), (req, res, next) => {
     //res.send('PROFILE');
    res.json({user: req.user});
});

// remove bigestTodo list 
router.delete('/todobigest/:idforbigarry', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updateOne({},
    {
        $pull: {bigestone: {
            _id: req.params.idforbigarry
        }}, 
    },
     {
            multi: true
    },
    function(err) {
        // res.send('Array by delete')
        res.json({user: req.user.bigestone});
        if(err){
            res.status(204);
        }
    });
});

// remove medtodo from list 

router.delete('/delmedtodo/:idmedtodo', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updateOne({},
    {
        $pull: {medtodo: {
            _id: req.params.idmedtodo
        }}, 
    },
     {
            multi: true
    },
    function(err) {
        // res.send('Array by delete')
        res.json({user: req.user.medtodo});
        if(err){
            res.status(204);
        }
    });
});

// Delete Sml todo 

router.delete('/delsmltodo/:idsmltodo', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    User.updateOne({},
    {
        $pull: {smltodo: {
            _id: req.params.idsmltodo
        }}, 
    },
     {
            multi: true
    },
    function(err) {
        // res.send('Array by delete')
        res.json({user: req.user.smltodo});
        if(err){
            res.status(204);
        }
    });
});




module.exports = router;