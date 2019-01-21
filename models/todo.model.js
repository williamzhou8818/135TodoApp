let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoAPI');

let TodoSchema = new mongoose.Schema({
    // name: String,
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    tOne: String,
    tMed_1: String,
    tMed_2: String,
    tMed_3: String,
    tSmall_1: String,
    tSmall_2: String,
    tSmall_3: String,
    tSmall_4: String,
    tSmall_5: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('todoDatas', TodoSchema)
