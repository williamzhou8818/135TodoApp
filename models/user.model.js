const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const config   = require('../config/database');

//User Schema
const Schema = mongoose.Schema;

// const todoSchema = new Schema({
//     tOne: String,
//     tMed_1: String,
//     tMed_2: String,
//     tMed_3: String,
//     tSmall_1: String,
//     tSmall_2: String,
//     tSmall_3: String,
//     tSmall_4: String,
//     tSmall_5: String,
//     date: { type: Date, default: Date.now }
// });

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    bigestone:[{bigestone: String}],
    medtodo: [{medtodo: String}],
    smltodo: [{smltodo: String}],

    // medone: {
    //     type: String
    // },
    // medtwo: {
    //     type: String
    // },
    // medthree: {
    //     type: String
    // },
    // smlone: {
    //     type: String
    // },
    // smltwo: {
    //     type: String
    // },
    // smlthree: {
    //     type: String
    // },
    // smlfour: {
    //     type: String
    // },
    // smlfive: {
    //     type: String
    // },
    createdOn: {type: Date, default: Date.now }
    // todos: { type: Schema.Types.ObjectId, ref: 'todoDatas' }
});





const User = module.exports = mongoose.model('User', UserSchema);


module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};
module.exports.getUserByUsername = function(username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// module.exports.updateTodos = function(newTodos, callback) {
 
// }


module.exports.comparePassword = function(candiatePassword, hash, callback) {
    bcrypt.compare(candiatePassword, hash, (err, isMatch) => {
      if(err) throw err;
        callback(null, isMatch);
    });

}