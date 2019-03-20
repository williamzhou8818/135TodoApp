let mongoose = require('mongoose');
const config  = require('./../config/database');

mongoose.connect(config.database);
const Schema = mongoose.Schema;

let TodoSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    tOne: String,
    tMed_1: String,
    tMed_2: String,
    tMed_3: String,
    tSmall_1: String,
    tSmall_2: String,
    tSmall_3: String,
    tSmall_4: String,
    tSmall_5: String,
    date: { type: Date, default: Date.now },
    byuser:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

})

const todoDatas = module.exports = mongoose.model('todoDatas', TodoSchema);



